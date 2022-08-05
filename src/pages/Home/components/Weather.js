import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CloudyIcon } from './weather-app-images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './weather-app-images/airFlow.svg';
import { ReactComponent as RainIcon } from './weather-app-images/rain.svg';
import { ReactComponent as RedoIcon } from './weather-app-images/refresh.svg';

const Container = styled.div`
    height: 100%;
    display: flex;
    border-radius: 1.5rem;

`;

const WeatherCard = styled.div`
    position: relative;
    min-width: 150px;
    box-shadow: 0 1px 3px 0 #999999;
    background-color: #f9f9f990;
    box-sizing: border-box;
    border-radius: 1.5rem;
    padding: 15px;
`;

const Location = styled.div`
    font-size: 30px;
    color: #222222;
    margin-bottom: 10px;
`;

const Description = styled.div`
    font-size: 14px;
    color: #828282;
    margin-bottom: 10px;
`;

const CurrentWeather = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`;

const Temperature = styled.div`
    color: #222222;
    font-size: 55px;
    font-weight: 400;
    display: flex;
`;

const Celsius = styled.div`
    font-weight: normal;
    font-size: 20px;
`;

const Cloudy = styled(CloudyIcon)`
    flex-basis: 30%;
`;

const AirFlow = styled.div`
    display: flex;
    align-items: center;
    font-size: 16x;
    font-weight: 300;
    color: #222222;
    margin-bottom: 20px;

    svg {
        width: 25px;
        height: auto;
        margin-right: 10px;
    }
`;

const Rain = styled.div`
    display: flex;
    align-items: center;
    font-size: 16x;
    font-weight: 300;
    color: #2222222;

    svg {
        width: 25px;
        height: auto;
        margin-right: 10px;
    }
`;

const Redo = styled.div`
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    display: inline-flex;
    align-items: flex-end;
    color: #828282;

    svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    }
`;

const Flex = styled.div`
    display: flex;
`;

const Left = styled.div`
    margin: 0px;
`;
const Right = styled.div`
    padding-top: 5px;
    margin-left: 40px;
`;

const WeatherApp = () => {
    const [weatherElement, setWeatherElement] = useState({
        observationTime: new Date(),
        locationName: '',
        description: '',
        temperature: 0,
        windSpeed: 0,
        humid: 0,
        rainPossibility: 0,
        comfortability: '',
    });
    
    
    useEffect(()=>{
        fetchCurrentWeather();
        fetchWeatherForecast();
    },[]);


    const fetchCurrentWeather = () => {
        fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-C61B8169-A760-4AF3-BFE7-FDE4123F4DEE&locationName=臺北',
    )
        .then(response => response.json())
        .then(data => {
          // STEP 1：定義 `locationData` 把回傳的資料中會用到的部分取出來
        const locationData = data.records.location[0];

          // STEP 2：將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
        const weatherElements = locationData.weatherElement.reduce(
            (neededElements, item) => {
            if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
                neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
            },
            {},
        );
          // STEP 3：要使用到 React 組件中的資料
          // 紀錄上一次的狀態
          // 物件新舊一起回傳
        setWeatherElement(prevState => ({
            ...prevState, //保留原又資料狀態
            //添加或更新資料狀態
            observationTime: locationData.time.obsTime,
            locationName: locationData.locationName,
            temperature: weatherElements.TEMP,
            windSpeed: weatherElements.WDSD,
            humid: weatherElements.HUMD,
        }));
        });
    };
    //另一隻api抓 CI=舒適度  Wx=天氣現象  Pop=降雨機率
    //
    const fetchWeatherForecast = () =>{
        fetch(
            'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-C61B8169-A760-4AF3-BFE7-FDE4123F4DEE&locationName=臺北市'
        )
        .then (response => response.json())
        .then(data => {
            const locationData = data.records.location[0];
            const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                    if(['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                        neededElements[item.elementName] = item.time[0].parameter;
                    }
                    return neededElements;
                },
                {},
            );
            
            setWeatherElement(prevState => ({
                ...prevState,
                description: weatherElements.Wx.parameterName,
                weatherCode: weatherElements.Wx.parameterValue,
                rainPossibility: weatherElements.PoP.parameterName,
                comfortability: weatherElements.CI.parameterName,
            }));
        });
    };

    return (
    <Container>
        <WeatherCard>
            <Flex>
                <Left>
                    <Location>{weatherElement.locationName}</Location>
                    <Description>{weatherElement.description} {weatherElement.comfortability}</Description>
                </Left>
                <Right>
                    <AirFlow>
                        <AirFlowIcon />
                        {weatherElement.windSpeed} m/h
                    </AirFlow>
                    <Rain>
                        <RainIcon />
                        {Math.round(weatherElement.rainPossibility)}％
                    </Rain>
                </Right>
            </Flex>
            <CurrentWeather>
                <Temperature>
                {Math.round(weatherElement.temperature)} <Celsius>°C</Celsius>
                </Temperature>
                <Cloudy />
            </CurrentWeather>

        <Redo onClick={()=>{
            fetchCurrentWeather();
            fetchWeatherForecast();
        }}
        >
            最後觀測時間：
            {new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
            }).format(new Date(weatherElement.observationTime))}{''}
            <RedoIcon />
        </Redo>
        </WeatherCard>
    </Container>
);
};

export default WeatherApp;
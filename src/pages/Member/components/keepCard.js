import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const KeepCard = () => {
    return (
        <>
            <motion.div
                className="keep-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.5,

                    default: { ease: "linear" },
                }}
            >
                <div className="keep-card-img">
                    <img src="/img/room/beauty/roomE2.jpeg" alt="" />
                </div>
                <div className="keep-card-title">房型1</div>
                <div className="keep-card-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci, voluptatum voluptas. Quo consequatur culpa tempore
                    corporis quisquam. Facere ea sint tenetur qui odit magnam ex
                    ducimus laboriosam blanditiis. Totam, eos.
                </div>
                <div className="keep-card-button">
                    <Link to="/">看更多</Link>
                </div>
            </motion.div>
        </>
    );
};

export default KeepCard;

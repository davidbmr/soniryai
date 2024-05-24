import React, { useState, useEffect, useRef } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';
import style from './MainKnop.module.css';

interface BasicKnopProps {
    label: string;
}

const BasicKnop: React.FC<BasicKnopProps> = ({ label }) => {
    const [value, setValue] = useState<number>(0);
    const knobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = 50;
                    const duration = 2000;
                    const stepTime = Math.abs(Math.floor(duration / (end - start)));
                    const timer = setInterval(() => {
                        start += 1;
                        setValue(start);
                        if (start === end) clearInterval(timer);
                    }, stepTime);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (knobRef.current) {
            observer.observe(knobRef.current);
        }

        return () => {
            if (knobRef.current) {
                observer.unobserve(knobRef.current);
            }
        };
    }, []);

    return (
        <div className={style.knobContainer} ref={knobRef}>
            <Knob value={value} onChange={(e: KnobChangeEvent) => setValue(e.value)} />
            <div className={style.knobLabel}>{label}</div>
        </div>
    );
}

export default BasicKnop;

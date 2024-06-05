import React, { useEffect, useRef } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';
import style from './MainKnop.module.css';

interface BasicKnopProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

const BasicKnop: React.FC<BasicKnopProps> = ({ label, value, onChange }) => {
    const knobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
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
            <Knob value={value} onChange={(e: KnobChangeEvent) => onChange(e.value)} />
            <div className={style.knobLabel}>{label}</div>
        </div>
    );
}

export default BasicKnop;

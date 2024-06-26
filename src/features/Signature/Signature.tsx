import { useState } from "react";
import { FaArrowUp, FaUpload } from "react-icons/fa";
import style from "./Signature.module.css";
import logo from "../../../public/assets/img/logo-sin-fondo.png";
import img from "../../../public/assets/img/signature.png";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";

function Signature({ nextStep, formData }) {
    const [uploadedSignature, setUploadedSignature] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedSignature(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={style.container__main}>
            <div className={style.container__purple}>
                <img src={logo} alt="logo" />
                <img src={img} alt="firma soniry" width={480} height={380} />
                <p className={style.signature__label}>FIRMA SONIRY</p>
            </div>

            <div className={style.container__text}>
                <div className={style.signature__container}>
                    <div className={style.signature__line}></div>
                    <label htmlFor="fileUpload" className={style.upload__button}>
                        <FaUpload size={20} color="white" />
                    </label>
                    <input
                        type="file"
                        id="fileUpload"
                        accept="image/png"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                {uploadedSignature ? (
                    <img src={uploadedSignature} alt="firma tú" className={style.uploadedSignature} />
                ) : (
                    <p className={style.signature__label}>FIRMA tú</p>
                )}
            </div>

            <GenerateExcelButton data={[formData]} />

            <div className={style.floating__button} onClick={() => nextStep(1)}>
                <FaArrowUp size={20} color="white" />
            </div>
        </div>
    );
}

export default Signature;

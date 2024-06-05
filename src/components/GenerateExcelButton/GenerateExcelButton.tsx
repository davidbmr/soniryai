import React from "react";
import ExcelJS from "exceljs";

const GenerateExcelButton = ({ data }) => {
  const exportToExcel = async (dataToExport, filename, sheetName) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetName);

    const headerStyle = {
      fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "232C3D" }, // Color de fondo
      },
      font: {
        color: { argb: "FFFFFFFF" },
        bold: true,
        size: 13, // Tamaño de letra
      },
      alignment: {
        vertical: "middle", // Alinear verticalmente al centro
        horizontal: "center", // Alinear horizontalmente al centro
      },
      border: {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      },
    };

    const headers = Object.keys(dataToExport[0]);
    headers.forEach((header, index) => {
      const cell = sheet.getCell(1, index + 1);
      cell.value = header.replace(/_/g, " ");
      cell.fill = headerStyle.fill;
      cell.font = headerStyle.font;
      cell.alignment = headerStyle.alignment;
      cell.border = headerStyle.border;

      sheet.getColumn(index + 1).width = header.length + 12;
    });

    dataToExport.forEach((item, rowIndex) => {
      headers.forEach((header, colIndex) => {
        const cell = sheet.getCell(rowIndex + 2, colIndex + 1);
        cell.value = item[header];
        cell.border = headerStyle.border;
        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        const maxLength = Math.max(
          header.length,
          ...dataToExport.map((item) => {
            const value = item[header];
            return value ? value.toString().length : 0;
          })
        );

        const column = sheet.getColumn(colIndex + 1);
        column.width = maxLength + 5;
      });
    });

    // Guardar el archivo Excel
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const generateFileName = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return `datos_soniryai_${formattedDate}`;
  };

  const handleExportClick = () => {
    const filename = generateFileName();
    const getFechaHora = (created_at) => {
      const fecha = new Date(created_at);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return fecha.toLocaleString("es-ES", options);
    };

    // Transformar los datos antes de exportar con etiquetas amigables
    const transformedData = data.map((item) => ({
        "Nombre de la Compañía": item.companyName,
        "Género": item.personalInformation.gender,
        "Edad": item.personalInformation.age,
        "Ubicación": item.personalInformation.location,
        "Transporte": item.personalInformation.transport,
        "Tipo de Vivienda": item.personalInformation.home,
        "Entusiasta": item.attitudes.entusiasta,
        "Rápido": item.attitudes.rapido,
        "Pacífico": item.attitudes.pacifico,
        "Regional": item.attitudes.regional,
        "Moderno": item.attitudes.moderno,
        "Nocturno": item.attitudes.nocturno,
        "Ritmo": item.soundEngineering.ritmo,
        "Tono": item.soundEngineering.tono,
        "Fuerza": item.soundEngineering.fuerza,
        "Estilo": item.soundEngineering.estilo,
        "Géneros Seleccionados": item.soundEngineering.selectedGenres.join(", "),
        "Contraste": item.wayToBe.contrast,
        "Temperamento": item.wayToBe.temperament,
        "Carácter": item.wayToBe.character,
        "Conversador": item.wayToBe.conversador,
        "Opción de Ropa": item.chooseClothing.option ? item.chooseClothing.option.title : "",
        "Descripción de Opción de Ropa": item.chooseClothing.option ? item.chooseClothing.option.description : "",
        "Look": item.chooseClothing.look ? item.chooseClothing.look.title : "",
        "Ritmo de Película": item.lookFor.selectedRitmo,
        "Géneros de Película": item.lookFor.selectedGeneros.join(", "),
        "Final de Película": item.lookFor.selectedFinal,
      }));

    exportToExcel(transformedData, filename, "Vista 1");
  };

  return (
    <button onClick={handleExportClick} style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      DESCARGAR EXCEL
    </button>
  );
};

export default GenerateExcelButton;

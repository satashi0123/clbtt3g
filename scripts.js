// Mobile NAV

const closeBtn = document.querySelector(".nav__close-btn");
// const navMenu = document.querySelector(".nav__menu-container");
// const mobileNavBtn = document.querySelector(".header__mobile-nav-btn");

// closeBtn.addEventListener("click", () => {
//   navMenu.classList.remove("nav__menu-container--show");
//   closeBtn.classList.remove("nav__close-btn--show");
//   console.log("click");
// });

// mobileNavBtn.addEventListener("click", () => {
//   navMenu.classList.add("nav__menu-container--show");
//   closeBtn.classList.add("nav__close-btn--show");
// });

// Record Table
const apiKey = "AIzaSyDL-kiAYEQ-ZoKitrgT1UYVbXw_1IYadsw"; // Replace with your API key
const spreadsheetId = "1N6iuwOW3MoF2FybHkWkn0qDpEIqFsofzRw2AwBTj1Rs"; // Replace with your spreadsheet ID
const sheetName = "KQ_KL"; // Replace with your sheet name

const studentCode = document.querySelector(".student-code");
const data1 = document.querySelector(".data-1");

// console.log(tableContent);
let recordTableData = "";

const tableRender = function (data) {
  if (data.length === 0) {
    data = [["Không tìm thấy kết quả"]];
  }
  const tableContent = document.querySelector(".main__record-table-body");
  // console.log(data);
  const startIndex = data[0][0] === "Mã học viên" ? 2 : -1;
  let rowDataHtml = ``;
  data.forEach((el, i) => {
    if (i > startIndex)
      rowDataHtml = `${rowDataHtml}
      <tr class="data__row">
        <th class="student-code">${el[0]}</th>
        <td class="data data-1">${el[1] === undefined ? "" : el[1]}</td>
        <td class="data data-2">${el[2] === undefined ? "" : el[2]}</td>
        <td class="data data-3">${el[3] === undefined ? "" : el[3]}</td>
        <td class="data data-4">${el[4] === undefined ? "" : el[4]}</td>
        <td class="data data-5">${el[5] === undefined ? "" : el[5]}</td>
        <td class="data data-6">${el[6] === undefined ? "" : el[6]}</td>
        <td class="data data-7">${el[7] === undefined ? "" : el[7]}</td>
        <td class="data data-8">${el[8] === undefined ? "" : el[8]}</td>
        <td class="data data-9">${el[9] === undefined ? "" : el[9]}</td>
      </tr>`;
  });
  tableContent.innerHTML = rowDataHtml;
};

fetch(
  `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    recordTableData = data.values;
    tableRender(recordTableData);
  })
  .catch((error) => console.error("Error:", error));

// Search record funciton
const searchInput = document.querySelector(".main_record-search");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toString().toUpperCase();
  let dataFiltered = [];
  for (recordData of recordTableData) {
    if (recordData[0].includes(searchValue)) {
      // console.log(recordData);
      dataFiltered.push(recordData);
      // console.log(dataFiltered);
    }
  }
  tableRender(dataFiltered);
});

// Show zoom record dialog
const zoomRecordDialog = document.querySelector(".popup--zoom-record");
const zoomRecordDialogshowBtn = document.querySelector(
  ".main__nav-btn--zoom-record"
);
const zoomRecordDialogcloseBtn = document.querySelector(
  ".popup__close-btn--zoom-record"
);

zoomRecordDialogshowBtn.addEventListener("click", () => {
  zoomRecordDialog.showModal();
});

zoomRecordDialogcloseBtn.addEventListener("click", () => {
  zoomRecordDialog.close();
});
// Show home work form dialog
const homeWorkDialog = document.querySelector(".popup--home-work");
const homeWorkDialogshowBtn = document.querySelector(
  ".main__nav-btn--home-work"
);
const homeWorkDialogcloseBtn = document.querySelector(
  ".popup__close-btn--home-work"
);

homeWorkDialogshowBtn.addEventListener("click", () => {
  homeWorkDialog.showModal();
});

homeWorkDialogcloseBtn.addEventListener("click", () => {
  homeWorkDialog.close();
});

// // Show terms links
// const showTermLinksBtn = document.querySelector(".nav__menu-item--home");
// const termLinks = document.querySelectorAll(".nav__menu-item--term");
// const showOldTermLinksBtn = document.querySelector(
//   ".nav__menu-item--term--old-btn"
// );
// const oldTermLinks = document.querySelectorAll(".nav__menu-item--term--old");

// showTermLinksBtn.addEventListener("click", () => {
//   termLinks.forEach((el) => {
//     el.classList.toggle("nav__menu-item--term--show");
//   });
// });

// showOldTermLinksBtn.addEventListener("click", () => {
//   oldTermLinks.forEach((el) => {
//     el.classList.toggle("nav__menu-item--term--old--show");
//   });
// });

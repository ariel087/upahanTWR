import React ,{ useState } from "react";
const CategoriesComponent = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  return (
    <>
    <div className="categories w-3/3 mx-2 h-20 px-5 sm:w-1/2 mt-5 overflow-auto whitespace-nowrap sm:h-24 shadow-lg sm:m-auto sm:mt-5 rounded-xl gap-5 bg-white flex justify-between items-center px-10">
      {/* Apartment Category */}
      <div
        className="category flex flex-col justify-center items-center w-24 h-full gap-1 cursor-pointer"
        onMouseEnter={() => handleMouseEnter("Apartment")}
        onMouseLeave={handleMouseLeave}
        aria-label="Apartment category"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          stroke={hoveredCategory === "Apartment" ? '#F5761A' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_580_38)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.8733 19.636V11.2398C1.49244 11.4116 1.13599 11.4154 0.839771 11.2971C0.608651 11.2055 0.413338 11.0414 0.270109 10.8296C0.12688 10.6177 0.0357343 10.3601 0.00806504 10.0758C-0.0342527 9.63501 0.078052 9.13697 0.39869 8.66946C0.414966 8.64656 0.43287 8.62366 0.454029 8.60458L9.74114 0.10539C9.86158 -0.0243684 10.0471 -0.0377259 10.1806 0.0843998L19.4889 8.56832C19.5035 8.58168 19.5165 8.59504 19.5295 8.61221C19.9609 9.15605 20.0683 9.75905 19.9641 10.2685C19.912 10.5204 19.8095 10.7456 19.6679 10.9326C19.5263 11.1196 19.3456 11.2646 19.1406 11.3505C18.815 11.4879 18.4277 11.4841 18.0354 11.2665V19.6131H17.124V10.7971C17.124 10.6044 10.7389 4.68701 10.0341 4.04395C9.28704 4.70991 2.78476 10.5796 2.78476 10.8276V19.6398L1.8733 19.636ZM10.3092 10.6273V14.0602H12.9361V14.0506C12.9361 13.1041 12.6057 12.2435 12.0735 11.6196C11.6096 11.0757 10.9928 10.7112 10.3092 10.6273ZM10.3092 14.7853V17.7659H12.9361V14.7853H10.3092ZM9.69068 17.764V14.7853H7.06373V17.7659H9.69068V17.764ZM9.69068 14.0602V10.6273C9.00546 10.7132 8.39023 11.0757 7.92636 11.6196C7.39413 12.2435 7.06373 13.1041 7.06373 14.0506V14.0602H9.69068ZM5.79257 19.2772H14.2057V20.0023H5.79257V19.2772ZM9.99993 9.88308C10.9781 9.88308 11.8668 10.3525 12.5097 11.1062C13.1542 11.8619 13.553 12.9038 13.553 14.0487V18.4872H6.44524V14.0487C6.44524 12.9019 6.84563 11.86 7.48853 11.1062C8.13307 10.3525 9.02174 9.88308 9.99993 9.88308ZM15.2603 0.677855L18.0549 0.81143V5.23658L15.2603 3.07457V0.677855Z"
              fill={hoveredCategory === "Apartment" ? '#F5761A' : 'black'}
            />
          </g>
          <defs>
            <clipPath id="clip0_580_38">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className={`text-sm ${hoveredCategory === "Apartment" ? 'text-customColor-light' : ''}`}>Apartment</p>
      </div>

      {/* Bed Space Category */}
      <div
        className="category flex flex-col justify-center items-center w-24 h-full gap-1 cursor-pointer"
        onMouseEnter={() => handleMouseEnter("Bed Space")}
        onMouseLeave={handleMouseLeave}
        aria-label="Bed Space category"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3333 22.9286V26.5M14 2.39286V10.4286M5.66667 22.9286V26.5M26.5 22.9286V15.7857C26.5 12.827 24.6346 10.4286 22.3333 10.4286H5.66667C3.36549 10.4286 1.5 12.827 1.5 15.7857V22.9286H26.5ZM23.7222 10.4286V6.85714C23.7222 3.89848 21.8568 1.5 19.5556 1.5H8.44444C6.14326 1.5 4.27778 3.89848 4.27778 6.85714V10.4286H23.7222Z"
            stroke={hoveredCategory === "Bed Space" ? '#F5761A' : 'black'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`text-sm ${hoveredCategory === "Bed Space" ? 'text-customColor-light' : ''}`}>Bed Space</p>
      </div>
        <div className="category flex flex-col justify-center items-center w-24 h-full gap-1 cursor-pointer"
        onMouseEnter={() => handleMouseEnter("Studio")}
        onMouseLeave={handleMouseLeave}
        aria-label="Studio category"
        >
          
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19303 4.12952H18.807L24.5748 0.0481374C24.705 -0.0440972 24.8759 0.00202006 24.9573 0.149595C24.9858 0.200324 25 0.257971 25 0.315618V22.4842C25 22.6595 24.8759 22.8001 24.7213 22.8001C24.6582 22.8001 24.6012 22.7771 24.5544 22.7379L18.809 18.7118H6.191L0.443522 22.7355C0.396729 22.7747 0.339762 22.7978 0.276693 22.7978C0.124105 22.7978 0 22.6571 0 22.4819V0.315618C0 0.257971 0.0142415 0.200324 0.0427246 0.149595C0.124105 -0.000285807 0.295003 -0.0440972 0.425212 0.0481374L6.19303 4.12952ZM6.20117 20.6787L6.42293 22.9684C6.44328 22.9661 6.46566 22.9661 6.48804 22.9731L8.33333 23.4411C8.35571 23.4458 8.37402 23.455 8.39233 23.4688L9.4401 21.4996L6.20117 20.6787ZM6.40259 23.4112L6.22559 24.3105C6.19507 24.4626 6.28052 24.6148 6.4148 24.6494L7.77181 24.993C7.90609 25.0276 8.04036 24.9307 8.07088 24.7785L8.24788 23.8793L6.40259 23.4112ZM19.4356 20.6787L19.2139 22.9684C19.1935 22.9661 19.1711 22.9661 19.1488 22.9731L17.3035 23.4411C17.2811 23.4458 17.2607 23.455 17.2445 23.4688L16.1967 21.4996L19.4356 20.6787ZM19.2362 23.4112L19.4132 24.3105C19.4438 24.4626 19.3583 24.6148 19.224 24.6494L17.867 24.993C17.7327 25.0276 17.5985 24.9307 17.568 24.7785L17.391 23.8793L19.2362 23.4112ZM9.10848 7.37618H15.9302C16.0461 7.37618 16.1397 7.48225 16.1397 7.61368V13.1985C16.1397 13.3299 16.0461 13.436 15.9302 13.436H9.10848C8.99251 13.436 8.89893 13.3299 8.89893 13.1985V7.61368C8.89893 7.48225 8.99251 7.37618 9.10848 7.37618ZM22.7905 3.73983L20.7682 5.08415C20.638 5.17177 20.4915 5.2248 20.4915 5.39774V14.3883C20.4915 14.5613 20.6401 14.6097 20.7682 14.7019L22.7905 16.1431C22.9187 16.2353 23.0672 16.0024 23.0672 15.8295V4.05112C23.0672 3.88049 22.9207 3.6522 22.7905 3.73983ZM19.165 4.61606V18.223L24.4425 21.9193V0.882861L19.165 4.61606ZM18.6076 18.0823V4.75902H6.39242V18.0823H18.6076ZM2.20947 3.73983L4.23177 5.08415C4.36198 5.17177 4.50846 5.2248 4.50846 5.39774V14.3883C4.50846 14.5613 4.35994 14.6097 4.23177 14.7019L2.20947 16.1431C2.0813 16.2353 1.93278 16.0024 1.93278 15.8295V4.05112C1.93278 3.88049 2.07926 3.6522 2.20947 3.73983ZM8.23161 6.08489H16.807C16.9576 6.08489 17.0959 6.15637 17.1977 6.26936L17.1997 6.27167C17.2994 6.38466 17.3625 6.54145 17.3625 6.71439V14.1739C17.3625 14.3445 17.2994 14.5013 17.1997 14.6166L17.1977 14.6189C17.098 14.7319 16.9596 14.8034 16.807 14.8034H8.23161C8.08105 14.8034 7.94271 14.7319 7.84098 14.6189L7.83895 14.6166C7.73926 14.5036 7.67619 14.3468 7.67619 14.1739V6.71209C7.67619 6.54145 7.73926 6.38466 7.83895 6.26936L7.84098 6.26706C7.94271 6.15407 8.07902 6.08489 8.23161 6.08489ZM16.805 6.71439H8.23364V14.1693H16.805V6.71439ZM5.837 18.223V4.61836L0.55542 0.882861V21.9193L5.837 18.223Z"
              fill={hoveredCategory === "Studio" ? '#F5761A' : 'black'}
            />
          </svg>

          <p className={`text-sm ${hoveredCategory === "Studio" ? 'text-customColor-light' : ''}`}>Studio</p>
        </div>
        <div className="category flex flex-col justify-center items-center w-24 h-full gap-1 cursor-pointer"
                onMouseEnter={() => handleMouseEnter("Condo")}
                onMouseLeave={handleMouseLeave}
                aria-label="Condo category"
        
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 22.1296H2.99479V0.347192C2.99479 0.15701 3.13924 0 3.31421 0H13.4583C13.6332 0 13.7777 0.15701 13.7777 0.347192V8.51393H22.7539C22.9289 8.51393 23.0733 8.67094 23.0733 8.86112V22.1274H25V25H0V22.1296ZM5.55827 3.27731H7.63346C7.69653 3.27731 7.74943 3.33481 7.74943 3.40336V6.13667C7.74943 6.20522 7.69653 6.26272 7.63346 6.26272H5.55827C5.4952 6.26272 5.4423 6.20522 5.4423 6.13667V3.40336C5.4423 3.33481 5.4952 3.27731 5.55827 3.27731ZM9.07389 16.8731H11.1491C11.2122 16.8731 11.2651 16.9306 11.2651 16.9991V19.7324C11.2651 19.801 11.2122 19.8585 11.1491 19.8585H9.07389C9.01082 19.8585 8.95793 19.801 8.95793 19.7324V16.9991C8.95793 16.9284 9.01082 16.8731 9.07389 16.8731ZM5.55827 16.8731H7.63346C7.69653 16.8731 7.74943 16.9306 7.74943 16.9991V19.7324C7.74943 19.801 7.69653 19.8585 7.63346 19.8585H5.55827C5.4952 19.8585 5.4423 19.801 5.4423 19.7324V16.9991C5.4423 16.9284 5.4952 16.8731 5.55827 16.8731ZM9.07389 12.3397H11.1491C11.2122 12.3397 11.2651 12.3972 11.2651 12.4657V15.199C11.2651 15.2676 11.2122 15.3251 11.1491 15.3251H9.07389C9.01082 15.3251 8.95793 15.2676 8.95793 15.199V12.4679C8.95793 12.3972 9.01082 12.3397 9.07389 12.3397ZM5.55827 12.3397H7.63346C7.69653 12.3397 7.74943 12.3972 7.74943 12.4657V15.199C7.74943 15.2676 7.69653 15.3251 7.63346 15.3251H5.55827C5.4952 15.3251 5.4423 15.2676 5.4423 15.199V12.4679C5.4423 12.3972 5.4952 12.3397 5.55827 12.3397ZM9.07389 7.80849H11.1491C11.2122 7.80849 11.2651 7.86599 11.2651 7.93454V10.6678C11.2651 10.7364 11.2122 10.7939 11.1491 10.7939H9.07389C9.01082 10.7939 8.95793 10.7364 8.95793 10.6678V7.93454C8.95793 7.86599 9.01082 7.80849 9.07389 7.80849ZM5.55827 7.80849H7.63346C7.69653 7.80849 7.74943 7.86599 7.74943 7.93454V10.6678C7.74943 10.7364 7.69653 10.7939 7.63346 10.7939H5.55827C5.4952 10.7939 5.4423 10.7364 5.4423 10.6678V7.93454C5.4423 7.86599 5.4952 7.80849 5.55827 7.80849ZM9.07389 3.27731H11.1491C11.2122 3.27731 11.2651 3.33481 11.2651 3.40336V6.13667C11.2651 6.20522 11.2122 6.26272 11.1491 6.26272H9.07389C9.01082 6.26272 8.95793 6.20522 8.95793 6.13667V3.40336C8.95793 3.33481 9.01082 3.27731 9.07389 3.27731ZM4.71395 1.61875H12.0219C12.148 1.61875 12.2518 1.75365 12.2518 1.91729V20.9067C12.2518 21.0703 12.148 21.2052 12.0219 21.2052H4.71395C4.58781 21.2052 4.48405 21.0703 4.48405 20.9067V1.91729C4.48405 1.75365 4.58781 1.61875 4.71395 1.61875ZM14.7725 11.8156H16.8477C16.9108 11.8156 16.9637 11.8731 16.9637 11.9416V14.6749C16.9637 14.7435 16.9108 14.801 16.8477 14.801H14.7725C14.7095 14.801 14.6566 14.7435 14.6566 14.6749V11.9416C14.6566 11.8731 14.7095 11.8156 14.7725 11.8156ZM18.2882 16.8731H20.3634C20.4264 16.8731 20.4793 16.9306 20.4793 16.9991V19.7324C20.4793 19.801 20.4264 19.8585 20.3634 19.8585H18.2882C18.2251 19.8585 18.1722 19.801 18.1722 19.7324V16.9991C18.1722 16.9284 18.2251 16.8731 18.2882 16.8731ZM14.7725 16.8731H16.8477C16.9108 16.8731 16.9637 16.9306 16.9637 16.9991V19.7324C16.9637 19.801 16.9108 19.8585 16.8477 19.8585H14.7725C14.7095 19.8585 14.6566 19.801 14.6566 19.7324V16.9991C14.6566 16.9284 14.7095 16.8731 14.7725 16.8731ZM18.2882 11.8156H20.3634C20.4264 11.8156 20.4793 11.8731 20.4793 11.9416V14.6749C20.4793 14.7435 20.4264 14.801 20.3634 14.801H18.2882C18.2251 14.801 18.1722 14.7435 18.1722 14.6749V11.9416C18.1722 11.8731 18.2251 11.8156 18.2882 11.8156ZM14.0096 10.1327H21.3175C21.4437 10.1327 21.5474 10.2676 21.5474 10.4312V20.9067C21.5474 21.0703 21.4437 21.2052 21.3175 21.2052H14.0096C13.8835 21.2052 13.7797 21.0703 13.7797 20.9067V10.4312C13.7797 10.2676 13.8835 10.1327 14.0096 10.1327Z"
              fill={hoveredCategory === "Condo" ? '#F5761A' : 'black'}
           
            />
          </svg>

          <p className={`text-sm ${hoveredCategory === "Condo" ? 'text-customColor-light' : ''}`}>Condo</p>
        </div>
        <div className="flex flex-col justify-center items-center w-24 h-full gap-1 cursor-pointer"
        onMouseEnter={() => handleMouseEnter("Loft House")}
        onMouseLeave={handleMouseLeave}
        aria-label="loft house category"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
          >
            <path
              d="M7.75401 21.9583V16.316C7.75401 15.5972 8.29247 15.0139 8.95593 15.0139H11.3598C12.0232 15.0139 12.5617 15.5972 12.5617 16.316V21.9583M12.5617 21.9583H17.3694V1.75579M12.5617 21.9583H20.5745V10.0949M17.3694 1.75579L18.972 1.125M17.3694 1.75579L6.15144 6.17593M20.5745 10.0949L17.3694 8.9375M20.5745 10.0949L22.1771 10.6736M1.34375 21.9583H2.94631M2.94631 21.9583H22.1771M2.94631 21.9583V1.125H6.15144V6.17593M1.34375 8.06944L6.15144 6.17593"
              stroke={hoveredCategory === "Loft House" ? '#F5761A' : 'black'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className={`text-sm ${hoveredCategory === "Loft House" ? 'text-customColor-light' : ''}`}>
            Loft House
          </p>
        </div>
        <div className="category flex flex-col justify-center items-center w-30 h-full gap-1 cursor-pointer" 
        onMouseEnter={() => handleMouseEnter("Commercial Space")}
        onMouseLeave={handleMouseLeave}
        aria-label="commercial space category"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.982 7.06288H23.1323H24.0621C24.0682 7.06288 24.0763 7.06288 24.0845 7.06078L20.5078 1.17013C20.4814 1.12804 20.4488 1.06701 20.4183 1.00808L20.4102 0.991245C20.3918 0.953363 20.3796 0.915481 20.3735 0.875495H4.61833C4.58374 0.875495 4.61833 0.938631 4.58171 1.00808C4.55322 1.0607 4.52474 1.11331 4.49015 1.17013L0.915527 7.06078C0.923665 7.06288 0.931803 7.06288 0.937907 7.06288H1.86768H16.982ZM9.24886 10.6974H15.7532V14.3004H9.24886V10.6974ZM10.9294 20.2121C11.1104 20.2121 11.2569 20.3637 11.2569 20.551C11.2569 20.7383 11.1104 20.8898 10.9294 20.8898C10.7483 20.8898 10.6018 20.7383 10.6018 20.551C10.6018 20.3637 10.7483 20.2121 10.9294 20.2121ZM10.9965 15.8389H14.0055C14.506 15.8389 14.9618 16.0514 15.2913 16.3924C15.6209 16.7333 15.8264 17.2047 15.8264 17.7225V24.1245H22.7091V7.93838H2.29085V24.1245H9.17358V17.7225C9.17358 17.2047 9.37907 16.7333 9.70866 16.3924C10.0382 16.0514 10.494 15.8389 10.9965 15.8389ZM14.0035 16.7123H10.9965C10.7279 16.7123 10.4838 16.8259 10.3068 17.009C10.1298 17.1921 10.0199 17.4446 10.0199 17.7225V24.1245H14.9801V17.7225C14.9801 17.4446 14.8702 17.1921 14.6932 17.009C14.5162 16.8259 14.2721 16.7123 14.0035 16.7123ZM17.9403 16.7649H20.9534C21.1873 16.7649 21.3765 16.9606 21.3765 17.2026V20.8056C21.3765 21.0476 21.1873 21.2434 20.9534 21.2434H17.9403C17.7063 21.2434 17.5171 21.0476 17.5171 20.8056V17.2026C17.5171 16.9606 17.7063 16.7649 17.9403 16.7649ZM20.5302 17.6404H18.3634V20.3679H20.5322V17.6404H20.5302ZM17.9403 10.2618H20.9534C21.1873 10.2618 21.3765 10.4575 21.3765 10.6996V14.3025C21.3765 14.5446 21.1873 14.7403 20.9534 14.7403H17.9403C17.7063 14.7403 17.5171 14.5446 17.5171 14.3025V10.6974C17.5171 10.4575 17.7063 10.2618 17.9403 10.2618ZM20.5302 11.1352H18.3634V13.8627H20.5322V11.1352H20.5302ZM4.04663 16.7649H7.05973C7.2937 16.7649 7.48291 16.9606 7.48291 17.2026V20.8056C7.48291 21.0476 7.2937 21.2434 7.05973 21.2434H4.04663C3.81266 21.2434 3.62345 21.0476 3.62345 20.8056V17.2026C3.62345 16.9606 3.81266 16.7649 4.04663 16.7649ZM6.63656 17.6404H4.46981V20.3679H6.63859V17.6404H6.63656ZM4.04663 10.2618H7.05973C7.2937 10.2618 7.48291 10.4575 7.48291 10.6996V14.3025C7.48291 14.5446 7.2937 14.7403 7.05973 14.7403H4.04663C3.81266 14.7403 3.62345 14.5446 3.62345 14.3025V10.6974C3.62345 10.4575 3.81266 10.2618 4.04663 10.2618ZM6.63656 11.1352H4.46981V13.8627H6.63859V11.1352H6.63656ZM23.5555 7.93838V24.5623C23.5555 24.8043 23.3663 25 23.1323 25H15.4032H9.59676H1.86768C1.63371 25 1.4445 24.8043 1.4445 24.5623V7.93838H0.937907C0.756836 7.93838 0.557454 7.87103 0.396729 7.76791C0.299072 7.70477 0.209554 7.62269 0.142415 7.53009C0.0528971 7.40593 0 7.26282 0 7.11129C0 6.99554 0.0305176 6.87979 0.0976563 6.76825L3.77808 0.705026C3.80046 0.669248 3.82284 0.625053 3.84521 0.582962C4.01001 0.277801 4.15853 0 4.61833 0H20.3796C20.8394 0 20.988 0.277801 21.1528 0.585066V0.587171C21.1711 0.620843 21.1894 0.656621 21.2199 0.70713L24.9003 6.77035C24.9674 6.88189 24.998 6.99764 24.998 7.11339C24.998 7.26703 24.9451 7.40803 24.8556 7.5322C24.7966 7.61428 24.7172 7.69004 24.6297 7.75107L24.6012 7.77212C24.4405 7.87735 24.2411 7.94259 24.0601 7.94259H23.5555V7.93838Z"
              fill={hoveredCategory === "Commercial Space" ? '#F5761A' : 'black'}
            />
          </svg>

          <p className={`text-sm ${hoveredCategory === "Commercial Space" ? 'text-customColor-light' : ''}`}>Commercial Space</p>
        </div>
        <div className="category flex flex-col justify-center items-center w-30 h-full gap-1 cursor-pointer"
        onMouseEnter={() => handleMouseEnter("Town House")}
        onMouseLeave={handleMouseLeave}
        aria-label="Town House category"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_580_26)">
              <path
                d="M10.9151 14.4647H10.7707V24.3302H13.5579V19.3642C13.5579 19.2055 13.6475 19.0784 13.7594 19.0784H16.097C16.2089 19.0784 16.2984 19.2055 16.2984 19.3642V24.3302H24.526V9.35443H19.5353V24.3273H19.0633V0.669823H10.7605V12.1867L11.3668 13.5581C11.4054 13.6448 11.4237 13.7372 11.4237 13.8324C11.4237 13.9537 11.3932 14.0663 11.3424 14.1616C11.3118 14.2193 11.2732 14.2713 11.2305 14.3146L11.204 14.3406C11.1186 14.4156 11.0128 14.4647 10.9151 14.4647ZM22.3124 1.04516C23.4416 -0.0635177 23.527 2.13073 24.6358 0.762213V2.99688C23.5779 4.34808 23.35 2.16538 22.3124 3.27405V1.04516ZM22.0337 0.435963C22.1537 0.435963 22.2494 0.57166 22.2494 0.742003C22.2494 0.854602 22.2066 0.952766 22.1436 1.00473H22.1537V3.69269C22.76 4.88798 25 9.16676 25 9.17831V24.6651C25 24.8499 24.8942 25 24.764 25C19.9382 25 15.1123 25 10.2885 25H7.01701H4.4047H0.9257C0.773112 25 0.651042 24.8239 0.651042 24.6102V14.4647H0.506592C0.41097 14.4647 0.303141 14.4156 0.217692 14.3406C0.164795 14.2915 0.115967 14.2309 0.0793457 14.1645C0.0305176 14.0663 0 13.9537 0 13.8324C0 13.74 0.0183105 13.6448 0.0569661 13.5581C0.614421 12.2965 1.2085 11.0232 1.74154 9.7442C1.82699 9.52477 1.90633 9.32267 2.16268 9.32267H9.257C9.51335 9.32267 9.59269 9.52477 9.68018 9.74708L9.70866 9.81638L10.2865 11.1214V0.588983C10.2865 0.427301 10.3333 0.280055 10.4085 0.17323C10.4838 0.0664049 10.5876 0 10.7015 0H19.1182C19.2322 0 19.3359 0.0664049 19.4112 0.17323L19.4295 0.202102C19.4946 0.30604 19.5333 0.441737 19.5333 0.59187V8.68749L21.9116 3.64361V1.00473H21.9218C21.8587 0.952766 21.816 0.854602 21.816 0.742003C21.818 0.574547 21.9137 0.435963 22.0337 0.435963ZM13.9628 24.3273H15.8976V19.6472H13.9628V24.3273ZM4.44539 16.0469H6.80135V18.27H4.44539V16.0469ZM5.03337 19.1015H6.38631C6.63452 19.1015 6.86239 19.2459 7.02515 19.4797C7.18994 19.7136 7.29167 20.0341 7.29167 20.3863V24.2205H10.2214V14.4647H1.20036V24.2205H4.13005V20.3863C4.13005 20.0341 4.23177 19.7107 4.39657 19.4797C4.55933 19.2459 4.78516 19.1015 5.03337 19.1015ZM6.38835 19.881H5.0354C4.93774 19.881 4.85026 19.9388 4.78516 20.0283C4.72005 20.1207 4.67936 20.2477 4.67936 20.3863V24.2205H6.74235V20.3863C6.74235 20.2477 6.70166 20.1236 6.63859 20.0312C6.57349 19.9388 6.486 19.881 6.38835 19.881ZM8.1604 20.0658H9.51742V22.2889H8.1604V20.0658ZM8.1604 16.0469H9.51742V18.27H8.1604V16.0469ZM1.90633 20.0658H3.26335V22.2889H1.90633V20.0658ZM1.90633 16.0469H3.26335V18.27H1.90633V16.0469ZM11.7778 1.93152H18.0806V8.97044H11.7778V1.93152ZM20.7825 18.3364H23.3887C23.4111 18.3364 23.4294 18.3566 23.4294 18.3768V19.4682C23.4294 19.4884 23.4111 19.5086 23.3887 19.5086H20.7825C20.7621 19.5086 20.7418 19.4913 20.7418 19.4682V18.3768C20.7438 18.3566 20.7621 18.3364 20.7825 18.3364ZM20.7825 15.9458H23.3887C23.4111 15.9458 23.4294 15.966 23.4294 15.9863V17.0776C23.4294 17.0978 23.4111 17.118 23.3887 17.118H20.7825C20.7621 17.118 20.7418 17.1007 20.7418 17.0776V15.9863C20.7438 15.966 20.7621 15.9458 20.7825 15.9458ZM20.7825 13.5553H23.3887C23.4111 13.5553 23.4294 13.5755 23.4294 13.5957V14.687C23.4294 14.7072 23.4111 14.7275 23.3887 14.7275H20.7825C20.7621 14.7275 20.7418 14.7101 20.7418 14.687V13.5957C20.7438 13.5755 20.7621 13.5553 20.7825 13.5553ZM16.6056 15.4175H17.9972C18.0196 15.4175 18.0379 15.4435 18.0379 15.4752V17.4501C18.0379 17.4818 18.0196 17.5078 17.9972 17.5078H16.6056C16.5833 17.5078 16.5649 17.4818 16.5649 17.4501V15.4752C16.567 15.4435 16.5853 15.4175 16.6056 15.4175ZM14.2151 15.4175H15.6067C15.6291 15.4175 15.6474 15.4435 15.6474 15.4752V17.4501C15.6474 17.4818 15.6291 17.5078 15.6067 17.5078H14.2151C14.1927 17.5078 14.1744 17.4818 14.1744 17.4501V15.4752C14.1744 15.4435 14.1927 15.4175 14.2151 15.4175ZM11.8245 15.4175H13.2161C13.2385 15.4175 13.2568 15.4435 13.2568 15.4752V17.4501C13.2568 17.4818 13.2385 17.5078 13.2161 17.5078H11.8245C11.8022 17.5078 11.7839 17.4818 11.7839 17.4501V15.4752C11.7839 15.4435 11.8022 15.4175 11.8245 15.4175ZM16.6056 11.5862H17.9972C18.0196 11.5862 18.0379 11.6122 18.0379 11.644V13.6188C18.0379 13.6505 18.0196 13.6765 17.9972 13.6765H16.6056C16.5833 13.6765 16.5649 13.6505 16.5649 13.6188V11.644C16.567 11.6122 16.5853 11.5862 16.6056 11.5862ZM14.2151 11.5862H15.6067C15.6291 11.5862 15.6474 11.6122 15.6474 11.644V13.6188C15.6474 13.6505 15.6291 13.6765 15.6067 13.6765H14.2151C14.1927 13.6765 14.1744 13.6505 14.1744 13.6188V11.644C14.1744 11.6122 14.1927 11.5862 14.2151 11.5862ZM11.8245 11.5862H13.2161C13.2385 11.5862 13.2568 11.6122 13.2568 11.644V13.6188C13.2568 13.6505 13.2385 13.6765 13.2161 13.6765H11.8245C11.8022 13.6765 11.7839 13.6505 11.7839 13.6188V11.644C11.7839 11.6122 11.8022 11.5862 11.8245 11.5862Z"
                fill={hoveredCategory === "Town House" ? '#F5761A' : 'black'}
              />
            </g>
            <defs>
              <clipPath id="clip0_580_26">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className={`text-sm ${hoveredCategory === "Town House" ? 'text-customColor-light' : ''}`}>Town House</p>
        </div>
      </div>
    </>
  );
};

export default CategoriesComponent;
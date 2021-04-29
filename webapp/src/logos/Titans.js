export default function Logo({ height, size, width }) {
  if (!height || !width) {
    width = size;
    height = Math.round((size * 137.44438) / 193.19792);
  }
  return (
    <svg height={height} viewBox="0 0 193.19792 137.44438" width={width}>
      <g transform="matrix(1.25 0 0 -1.25 -286.97 561.47)">
        <g transform="translate(.59976 .79968)">
          <path
            d="m278.97 384.36c0.14993-1.7958 0.7882-5.3689 2.8545-9.3562 2.5531-4.9238 7.9019-11.489 18.933-15.207 1.751-2.7478 3.8111-5.3164 6.1432-7.6407 8.3856-8.3609 19.525-12.957 31.367-12.939 11.843 0.017 22.969 4.6441 31.329 13.031 8.3609 8.3841 12.959 19.524 12.94 31.365-0.0186 11.844-4.6456 22.97-13.03 31.331-6.6439 6.6254-14.979 10.888-24.148 12.367-12.413 11.24-26.905 7.2126-27.526 7.0318-0.20863-0.0587-0.51928-0.14835-0.90563-0.2658-4.4602-1.4836-6.766 0.21635-8.2605 1.3878-1.6552 1.2982-3.4618 2.6164-5.2051 3.5963-5.9206 3.3304-14.336 3.4494-21.423 0.59192-4.6688-1.5903-7.0226 0.46673-8.415 1.428-9.2464 6.3796-20.615 7.9019-32.676 5.2468-8.1214-1.7896-11.37-3.4417-11.37-3.4417s5.5636-0.80672 11.376-3.2362c4.7724-1.9936 8.5664-4.5529 11.439-9.1491 0 0 1.8082-2.6551 0.63364-3.4386-1.3152-0.87628-2.6844 1.2688-2.6844 1.2688-0.0448-1.5439-0.0448-3.0801 0.0572-4.2469 0.66763-12.26 3.1682-19.624 9.0811-25.251 2.6906-2.5593 7.2296-5.049 14.243-7.8046 3.1991-1.2796 4.93-2.9194 5.2453-6.6686"
            fill="#fff"
          />
          <path
            d="m367.51 412.94c-6.4322 6.4136-14.597 10.46-23.434 11.702-11.521 11.024-25.454 6.9839-25.454 6.9839 2.9518-0.43892 4.913-2.1992 4.1572-4.1495-0.50225-1.2889-2.6458-1.3569-3.6256-1.3662-3.1126-0.034-5.8001 1.8746-7.9452 3.6179-2.2301 1.8144-5.8696 5.0336-9.1306 6.8664-6.0706 3.4139-15.71 2.9889-22.686-1.4651 4.1712-0.28282 9.1908-1.4836 12.184-3.9626 1.6706-1.3847 3.8018-4.1681 2.0586-5.4678-1.5316-1.1436-5.2947-0.55328-7.208 0.55482-3.0414 1.7603-5.7816 4.4293-7.4228 6.3642-11.042 13.008-26.685 13.734-39.587 10.548 8.4675-2.3769 14.118-7.2003 17.607-15.515 3.4912-8.3145 6.2019-11.854 11.953-14.107 3.6009-1.4094 4.5745-1.6706 4.2933-3.2671-0.41418-2.3367-4.6796-1.2147-7.9328 0.0557-3.9641 1.547-9.1862 5.8202-12.296 13.835 0.56564-10.37 2.5438-17.723 8.3887-23.287 2.4835-2.3614 7.0442-4.8048 14.181-7.5511 4.556-1.7541 8.1631-2.8158 11.557-5.8557 3.9579-3.5453 2.2718-5.8866-0.35391-5.4431-2.9704 0.50075-5.0908 3.5345-5.0908 3.5345s0.005-16.895 20.888-23.398c1.7386-2.8838 3.8404-5.5729 6.2869-8.0101 7.8509-7.8293 18.28-12.13 29.365-12.113 11.087 0.017 21.503 4.3474 29.333 12.2 7.8277 7.8509 12.132 18.28 12.113 29.367-0.0155 11.086-4.3489 21.502-12.201 29.33"
            fill="#024"
          />
          <path
            d="m365.3 410.84c-6.2298 6.2282-14.226 10.047-22.856 10.991-7.4259 7.4012-14.835 7.0534-14.835 7.0534 3.2516-2.0384 1.5748-6.5759-5.6579-7.5758-7.1632-0.98909-16.261 1.4388-20.692 6.6006-4.5668 5.3194-8.0147 5.5621-8.0147 5.5621 3.961-2.4743 4.2423-5.4446 6.647-9.9697 2.4047-4.5266 7.3548-6.1509 11.667-6.4337 4.5421-0.29828 4.6534-2.3537 0.99065-4.5266-3.995-2.3676-7.531-0.12983-10.101 2.4016-4.0584 4.0027-8.0997 4.7693-13.685 4.6982s-12.968-0.80517-19.201 1.5269c-6.2328 2.3336-10.342 10.535-10.342 10.535 3.0816-10.889 9.9295-16.051 16.286-17.298 8.3965-1.6459 14.201-3.6442 17.753-6.5203 3.468-2.8127 5.3148-5.6177 6.6176-9.4891 1.0061-2.9843 1.1854-6.9468 0.19321-7.1848-1.1576-0.2751-1.3956 1.3198-2.7602 4.1016-1.5068 3.0724-3.3057 5.4833-6.9344 7.4182-4.9176 2.6226-9.7302 2.4712-14.637 2.4032-3.8868-0.0541-6.1664 0.391-6.1664 0.391s0.16228-0.52548 6.4956-1.9473c7.0565-1.5826 13.883-5.5605 18.426-15.258 3.8652-8.2481 1.8483-14.053-6.715-11.426 0 0 3.9996-8.891 17.063-12.058 1.6861-2.9642 3.7817-5.7198 6.2576-8.1971 7.2389-7.2374 16.862-11.223 27.1-11.223 10.237 0 19.859 3.9857 27.101 11.223 7.2374 7.2404 11.223 16.864 11.223 27.103 0 10.236-3.9857 19.859-11.223 27.098"
            fill="#4b92db"
          />
          <path
            d="m338.2 420.19c9.7364 0 18.89-3.791 25.775-10.676 6.8865-6.885 10.678-16.039 10.678-25.774 0-20.1-16.352-36.454-36.453-36.454-9.7364 0-18.89 3.7926-25.777 10.678-6.885 6.885-10.676 16.039-10.676 25.777 0 9.7348 3.791 18.889 10.676 25.774 6.8865 6.885 16.04 10.676 25.777 10.676"
            fill="#fff"
          />
          <path
            d="m338.25 350.43c-18.392-0.0278-33.328 14.863-33.356 33.257-0.0263 18.396 14.866 33.329 33.26 33.356 18.394 0.0278 33.329-14.864 33.356-33.258 0.0278-18.396-14.863-33.329-33.26-33.354"
            fill="#16243e"
          />
          <path
            d="m330.05 390.48h-9.8708l-3.2532-5.8001-4.3752 12.404h51.193l-4.3674-12.404-3.2269 5.8001h-9.7039l-8.2187-35.955-8.177 35.955"
            fill="#fff"
          />
          <path
            d="m363.75 397.08h-51.193l0.8299-2.3506h24.41l-7.7412-4.2531 8.177-35.95v40.203h24.69l0.82683 2.3506"
            fill="#a5acaf"
          />
          <path
            d="m30.68 6.2012c-1.8192-0.024641-3.699 0.15312-5.6387 0.51172 0 0 8.6833-0.21112 16.271 13.406 6.3789 11.446 18.547 13.738 27.451 11.215 0 0-11.729-0.30316-18.146-11.676-5.329-9.444-12.054-13.35-19.937-13.457zm48.018 6.5273c-3.188-0.09237-6.1028 0.58863-8.1523 1.7617 0 0 7.8239-1.5781 14.877 4.0879 5.7646 4.6286 9.5457 8.3096 18.824 8.5742-4.3312-1.615-7.2392-4.4362-13.168-9.6348-3.7326-3.273-8.282-4.6703-12.381-4.7891zm56.854 27.289-2.3086 7.2969-7.6992 0.0918 6.2734 4.4629-2.3398 7.3359 6.1856-4.5859 6.2539 4.4883-2.4551-7.2988 6.207-4.4941h-7.6992l-2.418-7.2969zm-101.11 3.161s0.12158 13.626 15.744 17.814c10.911 2.9247 18.916 4.6031 24.014 11.652 0 0-1.2282-12.654-19.264-16.324-18.156-3.693-20.494-13.142-20.494-13.142zm80.01 41.734-5.0976 5.7734-7.0488-3.0938 3.9141 6.6309-5.1191 5.75 7.5137-1.6738 3.8887 6.6445 0.72852-7.6641 7.5215-1.6406-7.0644-3.0625 0.76367-7.6641zm42.219 0.07031 0.87891 7.6504-7.0176 3.1719 7.5488 1.5254 0.84766 7.6523 3.7832-6.7051 7.5391 1.5566-5.207-5.6699 3.8106-6.6875-7 3.1992-5.1836-5.6934z"
            fill="#c60c30"
            transform="matrix(.8 0 0 -.8 229.67 447.57)"
          />
        </g>
      </g>
    </svg>
  );
}
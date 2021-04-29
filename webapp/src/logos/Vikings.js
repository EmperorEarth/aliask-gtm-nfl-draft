export default function Logo({ height, size, width }) {
  if (!height || !width) {
    height = size;
    width = Math.round((size * 126.99984) / 156.02776);
  }
  return (
    <svg height={height} viewBox="0 0 126.99984 156.02776" width={width}>
      <g transform="matrix(1.3124 0 0 1.3124 1.1348 .85630)">
        <path
          fill="#fff"
          d="m94.884 77.234c-0.25634-1.5503-1.6602-2.9053-2.7552-3.1495-0.07691-0.01628-0.17862-0.03663-0.2885-0.0647 0.28484-1.0258 0.42278-1.8441 0.49195-2.4175 0.63112-0.28892 1.3681-0.59003 1.685-0.71658l1.0783-0.435-0.21566-1.1394c-0.444-2.353-1.676-4.298-2.381-5.258 0.25309-0.80162 0.40325-1.3225 0.40325-1.7656 0-0.90376-0.72431-1.8275-2.1484-2.743-0.11392-0.07284-0.24414-0.28078-0.24414-1.2614 0-0.01628-0.01628-0.93591-0.25636-1.8719 0.77314-0.52492 1.7412-1.3876 2.2177-2.7303 0.47609-1.351 0.65514-2.5473 0.72431-3.2431 0.03663-0.37842-0.01669-1.2858-0.01669-1.2858l-0.14608-1.7497s-0.87894 0.69989-1.3668 1.0742c-0.13062 0.09766-0.22828 0.17091-0.28159 0.20347-0.06917 0.05289-0.14608 0.10172-0.21933 0.14648-0.35848 0.21566-0.75686 0.38656-0.92777 0.47609-0.38291 0.20752-0.96438 0.42725-1.6036 0.6063-0.91922-4.7569-4.2884-13.078-12.435-20.419-9.7984-8.83-25.981-10.466-26.666-10.535l-1.5178-0.14242s-0.03255 2.2747-0.17538 2.9217l-0.01587 0.07323c-0.05289 0.31333-0.11394 0.61038-0.18759 0.88708-1.843-1.1516-3.1288-2.3194-3.7514-3.4222-1.1516-2.0345-1.5259-3.9023-1.8841-5.705-0.252-1.279-0.497-2.491-0.993-3.6631-1.31-3.0762-3.194-5.7009-5.599-7.7965-0.43541-0.37436-0.87894-0.765-1.5625-0.765-0.27262 0-0.67955 0.069187-1.0905 0.39878-0.29297 0.24008-1.1719 1.1272-0.19125 2.5798 0.01628 0.024406 1.6155 2.9502 2.2136 7.1414 0.19939 1.3794 0.24008 3.0803 0.28484 4.8789 0.08951 3.6419 0.19531 7.7639 1.6358 10.889 0.63478 1.3713 1.4527 2.6042 2.3072 3.6744 0.08545 0.1058 0.41098 0.44761 0.46795 0.51678 0.14648 0.17091 0.29705 0.34181 0.44353 0.50458-1.5747-0.13428-2.9258-0.54934-4.2686-1.3021l-0.05697-0.03255c-4.134-2.083-7.308-6.958-7.894-12.134l-0.078-0.675c-0.10986-0.91555-0.118-1.8433-0.1302-2.8241-0.0041-0.55747-0.01222-1.1312-0.03663-1.7091-0.06511-1.4486-0.22381-2.9175-0.48016-4.3663-0.105-0.6105-0.235-1.225-0.378-1.8272l-0.0122-0.044766c-0.077-0.4435-0.2-0.8626-0.301-1.2003-0.073-0.2564-0.155-0.5087-0.24-0.761-0.212-0.6348-0.493-1.2411-0.843-1.8067-0.464-0.7528-0.903-1.3428-1.379-1.8595-0.374-0.40695-0.741-0.73655-1.115-1.001l-0.057-0.03667c-0.15869-0.1058-0.59002-0.34181-1.1272-0.34181-0.28483 0-0.55747 0.065109-0.80569 0.19533l-0.159 0.09765c-0.62259 0.43947-0.99695 1.4039-0.43541 2.5595l0.05291 0.097656c0.0122 0.020344 0.04069 0.077313 0.07731 0.15869 0.03255 0.077328 0.06509 0.17091 0.09766 0.27264 0.02848 0.089516 0.04883 0.19125 0.07325 0.32959 0.18717 1.0051 0.36214 3.4019-0.54934 8.2116l-0.04883 0.24822c-0.10174 0.85452-0.19125 1.5015-0.29298 2.1038-0.39064 2.3031-0.80161 5.0498-0.8708 7.9878 0 0.08953 0.0041 0.2767 0.0081 0.43134l0.0041 0.13834c-0.02036 1.945 0.27669 18.803 16.916 24.652l0.01222 0.0041-0.05291 0.02034c-0.75686 4.8464-0.80975 7.8331-0.76092 9.2898-3.6094 1.4161-7.1617 3.117-10.551 5.058-5.3062 2.9053-10.23 6.5228-14.637 10.747-0.89114 0.85817-1.7456 1.7175-2.6083 2.6288-0.20345 0.21159-0.40284 0.42319-0.57781 0.61484l-0.056967 0.06063c-2.1825 2.3484-4.152 4.7969-5.857 7.2797-0.052859 0.07656-0.2075 0.325-0.26853 0.47188-0.19531 0.44688-0.40284 1.3062 0.004062 1.7578 0.24416 0.27188 0.72431 0.50469 1.6319 0.11719 0.044761-0.0122 0.21973-0.08139 0.28484-0.118 0.17497-0.09767 0.43541-0.26044 0.52084-0.32594 5.5097-4.2153 18.164-6.5431 21.859-6.7584 3.0966-0.18311 6.1688-0.6352 7.3081-0.81383 0.6185 0.29338 1.827 0.80203 3.1902 1.1027 0.57783 0.12614 1.2004 0.19125 1.8555 0.19125 0.56969 0 1.1028-0.04842 1.5585-0.11394 0.94405 2.9827 2.8241 5.0295 3.8006 5.945-0.06105 1.7986 0.24414 5.1723 1.5911 7.3611 1.0987 1.7945 2.6694 3.1658 3.5442 3.8498 0 0.85819 0.07324 2.238 0.50456 3.4055 0.3825 1.0458 1.0295 1.9939 1.5097 2.6161-0.18717 0.50091-0.37436 1.1646-0.41912 1.9089-0.05289 0.83782 0.14242 1.5137 0.38658 2.0183-0.21159 0.3825-0.41098 0.84231-0.4883 1.3021-0.1058 0.63072 0.02441 1.3184 0.17091 1.8225-0.1465 0.32188-0.30112 0.73286-0.38698 1.1235-0.11353 0.56155-0.01994 1.1231 0.09766 1.5422-0.43498 1.2655-0.91148 3.7844 0.70438 5.1478 0.4883 0.41058 1.0747 0.62625 1.6928 0.62625 1.2411 0 2.2498-0.883 2.7345-1.3957 0.72024-0.33774 1.5825-0.99694 2.0716-1.7542 0.36988-0.57375 0.54892-1.1268 0.63845-1.5455 0.32553-0.32594 0.74017-0.82237 1.1145-1.5345 0.3178-0.60183 0.46022-1.119 0.52127-1.5096 0.70395-0.84232 2.2625-2.9094 2.9375-5.4852l0.15909-0.71211c0.01628-0.085 0.03256-0.17497 0.04436-0.26856 0.3703-2.3361 0.06958-4.5167-0.12167-5.5341 0.54934-0.98474 1.6277-3.2269 1.7578-5.827 1.1923-0.79348 3.2716-2.0753 5.8108-3.2269 0.09766 1.5544 0.12655 3.1536-0.34588 5.5788-0.58189 2.9623-2.7427 5.412-3.8291 6.4863-0.37802 0.37028-1.3103 1.4283-1.3103 1.4283s-0.35767 0.30111-0.2885 0.91557c0.0037 0.0366 0.03255 0.14242 0.06063 0.21973 0.01222 0.0281 0.07731 0.12206 0.1058 0.14649 0.51678 0.5005 1.9369 0.31739 1.9369 0.31739 6.1159-0.65513 10.258-5.7945 12.02-10.039 1.0987-2.645 2.0916-6.1728 2.6811-8.3255 3.5447-0.64292 6.8244-0.96439 9.0502-1.1837 0.99288-0.09806 1.7783-0.17538 2.295-0.25677 1.355-0.19939 3.8778-0.57781 4.0366-2.9705 0.05289-0.76092-0.06103-1.9244-0.34995-3.6622"
        />
        <path d="m93.487 77.425c-0.16236-0.99694-1.1634-1.8881-1.6639-1.9984-0.5005-0.10947-1.7783-0.44312-1.7783-0.44312 0.94405-2.6648 0.94405-4.3336 0.94405-4.3336 0.83417-0.44394 2.4981-1.1105 2.4981-1.1105-0.553-2.9464-2.555-5.2252-2.555-5.2252 0.16683-0.61038 0.55706-1.6642 0.55706-2.055 0-0.39064-0.72391-1.0539-1.5011-1.5544-0.7772-0.5005-0.88708-1.3876-0.88708-2.4456 0-1.0539-0.44353-2.3886-0.61038-2.4456-0.16683-0.05291 1.9812-0.73245 2.6491-2.6247 0.66734-1.8881 0.68362-3.4222 0.68362-3.4222-0.88708 1.294-4.3622 1.827-4.3622 1.827-0.277-2.945-2.641-12.446-12.196-21.057-9.554-8.61-25.834-10.168-25.834-10.168 0.02441 0.48016-0.03663 1.0498-0.17905 1.6766-0.13428 0.80977-0.3703 1.7659-0.78128 2.5392-0.02441 0.04476-0.05697 0.10173-0.08952 0.15462-2.2462-1.2167-4.6062-2.8525-5.6888-4.765-2.095-3.703-1.835-6.889-2.946-9.501-1.819-4.2772-4.443-6.6006-5.225-7.2801-0.447-0.3907-0.598-0.5209-0.83-0.3337-0.22788 0.18311-0.07731 0.44761 0.10986 0.72431 0.17498 0.26042 1.8108 3.4141 2.4211 7.6947 0.61038 4.2767-0.19938 11.027 1.8027 15.361 1.2452 2.6978 3.3041 4.8341 4.6836 6.063 0.04883 0.04069 0.09766 0.08545 0.14242 0.12614l0.44759 0.44353c-2.8566 0.26858-5.5138 0.16684-8.3377-1.4201-4.541-2.287-8.025-7.605-8.663-13.233l-0.07733-0.67548c-0.18-1.543-0.107-3.085-0.176-4.631-0.061-1.404-0.215-2.804-0.46-4.1873-0.105-0.6104-0.232-1.2126-0.378-1.8148-0.004-0.0082-0.004-0.0123-0.004-0.0204-0.061-0.3662-0.167-0.7284-0.273-1.0865-0.069-0.236-0.146-0.472-0.224-0.7121-0.179-0.5249-0.41-1.0294-0.708-1.5096-0.358-0.5778-0.752-1.1394-1.212-1.6399-0.273-0.297-0.566-0.5778-0.895-0.8097 0 0-0.30519-0.19125-0.51272-0.081375 0 0-0.27262 0.19125 0.01628 0.78534 0 0 0.07324 0.118 0.15869 0.32147 0.04884 0.11392 0.10173 0.25634 0.15056 0.41911 0.04477 0.1465 0.08139 0.30519 0.10988 0.47609 0.22786 1.2208 0.39062 3.8494-0.57375 8.8667l-0.0081 0.01628c-0.08545 0.72838-0.17905 1.4568-0.30519 2.1811-0.39878 2.348-0.78534 5.0131-0.85045 7.7802 0 0.12208 0.01628 0.48016 0.0122 0.55341-0.02848 2.4619 0.44355 18.6 17.131 23.683-0.07731 0.34588-0.15056 0.67955-0.20347 1.001-1.1271 7.1169-0.71209 10.116-0.71209 10.116s0.0041 0.02848 0.0081 0.07323c-3.4141 1.2859-7.2756 3.0194-11.345 5.3469-4.5534 2.4944-9.4933 5.8881-14.328 10.519-0.90742 0.87486-1.7578 1.7334-2.5636 2.588-0.19531 0.20347-0.39064 0.41098-0.58595 0.61892-0.00814 0.01587-0.024416 0.02808-0.036623 0.04028-2.5514 2.7467-4.4761 5.2777-5.8717 7.3367 7.5402-5.4441 19.32-7.0762 22.922-7.2883 3.7762-0.21933 7.6012-0.86591 7.6012-0.86591s1.4934 0.79714 3.2756 1.1878c2.0223 0.44761 4.1383-0.19531 4.1383-0.19531 0.76094 3.9145 3.5117 6.4292 4.2319 6.9944-0.18719 1.1764 0.0041 5.0584 1.3265 7.215 1.4242 2.3234 3.7762 3.8902 3.7762 3.8902s-0.16277 2.1038 0.39064 3.6094 1.8392 2.8769 1.8392 2.8769-0.58595 0.98473-0.66326 2.2217 0.66326 1.9244 0.66326 1.9244-0.67141 0.86306-0.78534 1.5345c-0.11026 0.67548 0.30519 1.6883 0.30519 1.6883s-0.40691 0.741-0.52492 1.3107c-0.12206 0.57375 0.21973 1.2781 0.21973 1.2781-0.27262 0.53265-1.082 3.0352 0.10988 4.0403 1.1882 1.0051 2.6694-0.8708 2.6694-0.8708 0.45575-0.13428 1.3139-0.69989 1.7208-1.3347 0.50091-0.77721 0.50091-1.5015 0.50091-1.5015s0.63886-0.41545 1.1919-1.473c0.45656-0.8586 0.39105-1.4242 0.39105-1.4242s2.5839-2.7141 3.1211-6.1038c0.45941-2.8891-0.22014-5.5548-0.22014-5.5548s1.9414-2.9538 1.8519-6.3312c1.3225-0.92409 4.5127-2.9948 8.4842-4.5408 0.11394 2.2783 0.47202 4.2519-0.24008 7.9141-0.89114 4.5575-4.9481 7.8905-4.9481 7.8905 5.668-0.61036 9.4486-5.6117 10.946-9.2247 1.2248-2.9464 2.3397-7.1133 2.8566-9.0014 5.5295-1.0742 10.58-1.3591 12.256-1.6109 2.2217-0.33408 2.7792-0.83052 2.8322-1.6642 0.05697-0.83458-0.16684-2.3361-0.33408-3.3372z" />
        <path
          d="m37.945 11.162c0.43092 1.9373 0.53711 5.0586 0.53711 5.0586-0.12736-1.0987-0.60383-2.8133-0.9668-4.0117 0.13103 0.86755 0.23536 1.6812 0.31836 2.3477 0.28606 2.3181-0.26731 6.4617 1.375 10.805 1.0629 2.8097 3.3724 4.869 4.7559 5.9082 1.1467-1.6159 2.6153-3.6927 3.6094-5.2207-5.5963-3.4564-6.9873-6.7379-7.834-11.439-0.13511-0.75727-0.31761-1.4766-0.52148-2.1602 0.15748 1.7811 0.01758 3.4492 0.01758 3.4492-0.21608-1.7213-1.291-4.7363-1.291-4.7363zm-14.586 0.307c0.01058 0.36906-0.0067 0.73875-0.02344 1.1074-0.04109 0.9595-0.25634 2.1007-0.35156 3.0566-0.09441 0.96033-0.25716 1.9056-0.40039 2.8594-0.03906 0.26327-0.09928 0.78858-0.10742 0.70312-0.000782-0.0175-0.0022-0.03548-0.0039-0.05664-0.05169-0.58555-0.19889-2.4695-0.1875-4.6094l-0.0059-0.44141c-0.01303 0.08342-0.02677 0.16812-0.04102 0.25195-0.35034 2.0594-0.76441 4.9224-0.80469 8.0137-0.000781 0.0883 0.0075 0.34683 0.0059 0.48438-0.01953 0.96072 0.01755 4.957 1.7363 9.3672 2.6128 6.708 7.6805 11.157 15.059 13.225 3.6545 1.038 7.7682 1.8123 10.631 2.6777 0 0.0037 0.0039-0.0098 0.0039-0.0098s3.1657 0.9269 5.0762 2.4004c0 0-2.0769-0.42025-4.1953-0.68555 1.5231 2.2681 4.1069 3.7617 7.0449 3.7617 2.2247 0 4.2452-0.862 5.7598-2.2617-0.36419 0.25431-0.70409 0.44831-0.97266 0.57812-0.72513 0.35076-1.4386 0.47192-1.9766 0.50977-1.2126 0.38617-2.4289 0.21786-2.7422 0.16211 0.02524-0.0057 0.05013-0.01391 0.07617-0.01758 3.6488-0.62948 7.0509-3.4191 6.668-7.6738-0.16561-1.8156-0.72022-3.7561-1.8652-4.9805 1.4295 1.2175 2.4024 2.9591 2.584 4.9629 0.09073 0.98963-0.02327 1.9505-0.30078 2.8457 0.46348-0.99899 0.73453-2.1036 0.75-3.2734 0.26897 1.2488 0.17041 2.3197-0.125 3.2344 0.36214-0.90295 0.57128-1.8835 0.58594-2.9121 0.02605 0.11964 0.0367 0.23283 0.05664 0.34961 0-0.0077 0.002-0.01375 0.002-0.02148 0-0.61484-0.06567-1.2139-0.19141-1.791l-0.002-0.08398c-0.48505-3.1756-2.8105-6.1955-5.7754-7.5273-0.8883-0.46103-3.588-1.457-6.5098-1.7207-1.3245-0.15014-2.7445-0.13273-4.4805 0.05078-0.77517 0.0818-1.5298 0.17822-2.2695 0.27344-3.9654 0.50824-7.71 0.98852-11.723-1.2617-4.972-2.5058-8.6525-8.1009-9.3516-14.242l-0.07617-0.66992c-0.1001-0.84599-0.13672-1.7424-0.18555-2.6074-0.07122-0.76541-0.21183-1.1824-0.22852-1.0859-0.0098 0.05616 0.0078 0.12662 0.0078 0.18359 0.0049 0.65431-0.15616 1.304-0.25586 1.9453-0.118 0.76256-0.27498 2.2098-0.28516 2.1602-0.01301-0.06022-0.03173-0.12159-0.03906-0.17774-0.03417-0.21202-0.04054-0.42073-0.04297-0.63476-0.0053-0.42848-0.01319-0.85824-0.03516-1.2871-0.05412-1.0739-0.23526-4.2106-0.32031-4.6094-0.02197-0.10174-0.06567-0.45842-0.17188-0.52148z"
          fill="#fff"
          transform="translate(0 -.0016899)"
        />
        <path
          d="m75.227 52.209c-0.52086 0.0093-2.3988 0.239-2.9277 0.26953-0.0077 0.03011-0.19806 0.06007-0.49023 0.0918 0.000782 0.05738 0.000335 0.1145 0.002 0.17188 0 0-0.78787 6.0536-3.6562 10.004 0.75117 0.41669 2.6455 0.98336 3.3145 1.5938 1.2399 1.1312 1.3083 2.7663 1.248 3.4121-0.05778 0.6478-0.15314 1.8014-0.74805 4.0898 0 0-0.14525-3.2896-0.43945-4.2598-0.29339-0.96886-1.3948-1.8648-2.4531-2.1875-0.48016-0.14689-1.3608-0.38192-2.3398-0.59961-1.8905 2.1639-3.7966 3.6598-5.5879 5.252 0.19003 0.2942 0.45831 0.54216 0.83594 0.64062 1.0767 0.28076 2.4375-0.36133 2.4375-0.36133s-0.86427 4.0034 1.4336 7.416c1.7134 2.5448 5.0234 1.8926 5.0234 1.8926s0.71101-5.0297 3.8496-9.0586c2.8928-3.7152 6.4187-5.6381 8.8809-6.3633-0.0883-0.45616-0.23863-1.4007-0.06445-1.8594 0.23478-0.61647 0.91154-1.1758 1.7344-1.1758 0.82319 0 1.7617 0.44141 1.7617 0.44141-0.43988-0.08831-1.5859-0.14611-2.1738 0.46875-0.45127 0.47486-0.2431 1.4344-0.12305 1.8535 2.2653-0.41626 4.3512-0.13404 4.75-0.03516 0.42766 0.10702 0.81925 0.03469 0.96289-0.5 0.14324-0.53427 0.14234-1.1755-0.14453-1.3887-0.286-0.217-0.749-0.288-1.213-0.644s-0.854-1.213-0.819-2.461c0.03577-1.2474-0.71162-2.9561-0.71289-2.959-1.7119 0.67711-5.7072-0.5358-8.2031-0.71484-2.4969-0.17822-4.2461 0.99805-4.2461 0.99805-0.67791-1.7119 0.10742-4.0293 0.10742-4.0293zm6.6504 3.8652c1.1442 0.025 1.9199 0.32226 1.9199 0.32226-1.2049 0.059-2.0566 0.52734-2.0566 0.52734 0.29542 0.35319 0.82227 1.116 0.85156 1.3809 0.0037 0.03295 0.00031 0.10587-0.0059 0.20312 0 0-0.0026 0.02881-0.0059 0.07031v0.0098c-0.03703 0.40609-0.23412 2.2972-0.66992 2.8242-0.0643 0.10499-0.13542 0.20726-0.22656 0.29883-0.5001 0.46795-1.3753 0.9127-3.0273 2.0586-1.8214 1.2643-3.2617 3.8477-3.2617 3.8477s0.51853-2.4423 1.6445-3.8379c1.3953-1.7289 3.2141-2.8717 4.3359-3.4688l0.50391-2.252c-0.38616-0.25798-0.87181-0.52124-1.3418-0.60547-0.97538-0.17172-2.6187-0.15014-3.625-0.47852 0.0049-0.0077 0.01172-0.01953 0.01172-0.01953 1.2045-0.14691 1.9099-0.50033 3.7012-0.79492 0.44789-0.07335 0.87054-0.09427 1.252-0.08594zm7.5156 15.416s-6.6483 2.8669-8.5547 8.1426c0 0 3.9898 0.1035 6.2227 0.36719 2.2331 0.26489 3.6847 0.27498 4.1836 0.30469 0.4993 0.02808 1.5262 0.08735 1.2031-1.7344-0.32308-1.8217-0.82262-2.1452-1.7031-2.498-0.88178-0.3528-2.3789-0.26367-2.3789-0.26367s1.1453-2.7916 1.0273-4.3184zm-29.84 0.06055c-0.1473 0.14934-0.29491 0.29533-0.44141 0.45117 0 0 1.3335 1.8519 2.1484 5.334 0.62014 2.6511-1.0371 6.9629-1.0371 6.9629s0.85976 2.1648 1.2402 4.7988c0.05128-0.03133 0.10619-0.0664 0.15625-0.0957 0 0 4.6209-2.4495 7.1035-3.4863 0.39227-0.1648 0.88678-0.34261 1.4414-0.52734 0.05127-1.036 0.15331-2.4626 0.36328-3.7871-0.47772 0.0122-0.91723 0.01758-1.2871 0.01758-2.5558 0-4.1474-1.481-5.334-3.2227h0.002c-1.1846-1.7395-2.002-5.2227-2.002-5.2227s-1.4794-0.03284-2.3535-1.2227zm20.439 9.418c-0.0122 0-0.02726 0.002-0.03906 0.002-0.30722 0.48259-0.55419 0.99547-0.82031 1.7148 0.85738-0.16845 1.6854-0.31658 2.4434-0.42969 4.1867-0.63031 7.6301-0.74039 8.1855-0.81445 0.55584-0.07405 1.5559-0.03775 1.9258-0.33398 0 0-1.1586 0.09408-2.418 0.05664-1.2602-0.03622-6.2031-0.19531-9.2773-0.19531z"
          fill="#e9bf9b"
          transform="translate(0 -.0016899)"
        />
        <path
          d="m50.594 22.027s-0.12358 1.4648-1.0078 3.3379c-0.31414 0.6645-0.72312 1.3789-1.2578 2.0996-0.76827 1.0332-2.3073 3.159-3.7227 5.2988-0.0472 0.07242-0.31055 0.41016-0.31055 0.41016 0.52574-0.06105 1.0591-0.12728 1.6035-0.19727 0.74953-0.09562 1.5131-0.19433 2.2988-0.27734 1.8331-0.1941 3.3437-0.21152 4.75-0.05078 2.7817 0.25025 5.447 1.137 6.7129 1.7266 3.5234 1.4897 6.2998 5.0774 6.791 8.8301h-0.0059c0.01994 0.10377 0.04038 0.20752 0.05664 0.3125 0.0061 0.03906 0.01188 0.07894 0.01758 0.11719 0.01994 0.13347 0.03695 0.26839 0.05078 0.4043 0 0.0012 0.002 0.0018 0.002 0.0039 0.87325-0.10334 5.4681-0.62411 9.3008-0.59766 3.4181 0.02278 6.4514 0.38191 7.9102 0.61914-1.498-3.34-3.815-7.259-7.318-10.578-7.918-7.5-17.704-11.084-25.871-11.459zm-12.024 24.834c-0.0358 0.16562-0.06755 0.33056-0.09766 0.49414-0.09603 0.5888-0.177 1.189-0.24414 1.7871 1.508-0.39145 3.2906-0.81012 5.0078-1.1133 0.04069-0.0065 0.07884-0.01301 0.11914-0.01953-0.02848-0.0077-0.05631-0.01456-0.08398-0.02148-0.29461-0.07406-0.59114-0.14975-0.89062-0.22461-0.59817-0.15056-1.2035-0.29125-1.8086-0.43164-0.67102-0.15584-1.3424-0.30997-2.002-0.4707zm52.027 4.7109s-0.76656 0.35269-2.4688 0.73438c-1.7042 0.38169-5.1404-0.14608-6.1699-0.26367-1.0279-0.11719-4.112-0.35241-4.9941 0.23438-0.88056 0.58677-0.67578 2.3496-0.67578 2.3496s0.70681-0.73272 2.4395-1.1738c1.7331-0.44028 4.0254-0.11719 4.0254-0.11719-1.3225 0.26328-2.0566 0.70508-2.0566 0.70508 2.4675 0.32309 2.9069 1.1161 6.1973 0.88086 3.2903-0.2352 3.7031-3.3496 3.7031-3.3496zm-20.385 1.2891c-0.9005 0.07975-1.7577 0.18839-2.6191 0.27344-0.0061 0.03256-0.01342 0.06738-0.01953 0.0918-0.86875 2.9031-2.5477 4.9906-5.2148 6.2109-3.4828 3.5516-8.6801 6.0211-11.58 7.8789-5.1156 3.2797-5.9551 9.748-5.9551 9.748 0.56276-9.927 6.6477-11.208 13.299-16.088 0.13917-0.10091 0.47469-0.29198 0.60938-0.39453l-0.20703 0.08594c-0.83133 0-2.53-0.15509-3.3125-0.33984-0.72716 0.50011-1.4358 0.94002-2.0898 1.2969-3.4808 1.8986-5.8945 4.998-5.8945 4.998 0.94078-3.1427 3.1429-4.4668 6.4434-6.791-1.2338-0.50783-2.6149-1.3691-3.5684-2.3086-1.9442 1.0043-6.2416 3.614-9.1035 6.3184-2.2881 2.1639-6.5326 5.2316-11.551 7.5977 3.9438-2.6091 10.594-8.4704 12.928-10.693 0 0-8.7458 5.0505-11.25 6.7461 0 0 3.2544-3.5909 7.2793-5.8066 0 0-8.8989 3.6465-14.02 7.1426-2.6491 1.8091-6.7076 5.4953-9.0527 8.0039 0.96317-0.20875 4.6192-0.94678 5.5938-1.0469 6.5814-0.6767 13.775-0.16526 20.078-7.7539 0.10336-0.12248 0.21045-0.24602 0.30078-0.35547-0.54892 1.8763-0.78436 4.5058-0.67774 7.4375 0.2291 6.3364 5.15 8.8386 7.0547 10.168-0.04761-0.77925-0.1658-1.5572 0.53125-4.2949 0.76703-3.0164 2.8452-5.463 3.3359-5.8516 0 0-3.2268 4.3051-2.2949 11.074 0 0 0.88973-5.5453 5.0703-10.988 4.1806-5.4417 8.197-7.988 11.523-12.053 1.8491-2.2605 2.8977-4.4306 3.5215-6.3789 0.51028-1.4568 0.73844-2.8791 0.8418-3.9277zm-21.572 2.7559c-0.905 0.183-13.053 1.779-27.747 11.654-4.868 3.272-10.839 9.079-13.786 12.319 1.2631-0.552 3.984-1.693 6.137-2.358 2.199-2.258 5.809-5.916 9.117-8.234 7.666-5.368 20.777-10.921 26.93-12.6-0.132-0.179-0.261-0.36-0.383-0.548l-0.26758-0.23242zm39.127 9.1367c-1.2773 0.0034-3.046 0.23073-5.0137 1.127-3.9369 1.7916-7.6884 5.3668-9.3047 9.0684-1.6147 3.7017-1.7434 7.6164-1.9199 10.496-0.17497 2.8794 0.30578 7.1819-0.82422 11.057 0 0 1.8555-2.744 2.5293-10.498 0.61038-7.0316 2.3508-11.869 5.582-14.131 0 0-2.5854 3.5835-3.4668 9.459-0.88138 5.8763-0.70462 8.1688-1.791 13.045l-0.26953 0.91406s2.5869-3.4618 3.9883-12.486c1.2268-7.8897 3.5363-11.43 6.709-13.281 0 0-4.2458 4.6147-5.2188 11.223 0 0 2.4073-5.9535 6.1973-8.4512 3.79-2.4959 7.0684-3.3301 7.0684-3.3301s-0.12864-2.0482-2.2031-3.9941c0 0-0.78523-0.2202-2.0625-0.2168zm-48.053 6.2129s-2.9379 3.5159-6.1895 4.3301l-0.12695 0.01367s1.867 0.97656 3.4141 0.97656 2.8164-0.5 2.8164-0.5-0.2579-3.6317 0.08594-4.8203zm18.007 2.033s-3.7883 4.1428-5.2734 7.5195c-1.3241 3.0128-1.7881 5.4393-1.8594 6.7285 1.5841 0.98514 3.4983 2.1798 4.5547 3.0176 0.25595-0.61566 0.53288-1.2274 0.82422-1.8027 1.6928-3.3383 3.3537-4.5276 4.0117-8.0059 0.657-3.48-0.997-6.15-2.258-7.457zm-12.862 12.08s-0.017 3.3618 1.6289 5.9277c1.2269 1.913 4.5728 3.657 6.7539 4.9648 0.1888-0.71047 0.69642-2.5356 1.4297-4.5039-0.883-0.67019-3.4341-2.57-4.9961-3.4375-1.9138-1.0612-4.0019-2.2309-4.8164-2.9512zm14.293 1.0488c-0.28119 0.45086-0.72819 1.1464-0.99024 1.5-0.82808 1.1198-2.8706 5.5698-3.7422 9.0566 0.26083 0.16236 0.49594 0.31476 0.69531 0.45312 0.9587 0.671 1.5273 1.2094 1.8496 1.5684 0.41748-0.74222 1.2362-1.4982 1.5625-2.0898 1.1992-2.1781 2.1184-4.7496 1.8203-7.0918-0.20428-1.6086-0.92634-2.889-1.1953-3.3965zm-8.757 9.871c-0.0085 0.7125 0.08158 2.5139 1.0977 3.9805 1.296 1.8702 3.1504 2.832 3.1504 2.832s0.83192-1.4591 1.7539-3.0938c-0.58-0.493-1.361-1.082-2.323-1.678-0.875-0.543-2.373-1.288-3.679-2.041zm8.043 2.5762s-1.5152 2.0437-2.5781 3.957c-0.74139 1.3351-1.4069 3.0898-1.7402 4.0274 0.07041 0.0403 0.13778 0.0811 0.19922 0.12304 0.69664 0.46958 1.5879 1.7207 1.5879 1.7207s1.9084-2.1263 2.6836-4.5352c0.77598-2.4086-0.15234-5.293-0.15234-5.293zm-6.0273 3.8125c-0.33205 0.43093-0.91634 0.92845-0.52734 2.2383 0.23846 0.80325 0.83658 1.2169 1.4258 1.5254 0.38006-1.2053 0.87109-2.5391 0.87109-2.5391-0.8993-0.45778-1.7695-1.2246-1.7695-1.2246zm-0.48633 3.7754s-0.56894 0.76897-0.35938 1.6797c0.21038 0.91148 1.057 1.3058 1.957 1.7637 0.9005 0.45778 1.2402 1.3711 1.2402 1.3711 0.63966-0.44964 0.95713-1.1368 0.60352-1.8848-0.35442-0.74872-1.0353-1.3829-1.9883-1.8379-0.95219-0.45534-1.4531-1.0918-1.4531-1.0918zm-0.33203 3.0098c-0.92817 1.5967-0.47897 1.9671 0.80078 2.916 0.87608 0.64781 0.70898 1.4941 0.70898 1.4941s1.2012-0.60894 1.1211-1.3809c-0.05289-0.5115-0.79011-1.5627-1.4863-2.0332-0.69664-0.47079-1.1445-0.99609-1.1445-0.99609zm-0.22656 3.0293c-0.52369 0.64904-0.76213 1.9578-0.42969 2.3477 0.33123 0.39064 0.79239 0.34432 1.0801 0.0176 0.28769-0.32513 0.37305-0.83927-0.02734-1.3809-0.32309-0.43867-0.62305-0.98438-0.62305-0.98438z"
          fill="#ffc62f"
          transform="translate(0 -.0016899)"
        />
        <path
          d="m84.446 45.372c-1.0531-0.19614-4.4077-0.70275-8.5725-0.73083-3.7847-0.02562-8.3488 0.44761-9.2488 0.54772 0 0.0049-0.000781 0.01017-0.000781 0.01586-0.0053 5.63-4.8512 9.6488-9.3644 9.7159-6.8158 0.10173-9.3248-5.3916-9.3769-5.7159-0.48586-0.14159-1.0047-0.2832-1.5426-0.42725-0.90539 0.11067-1.8734 0.24944-2.8895 0.42889-1.878 0.33081-3.8181 0.79389-5.3969 1.2049-0.07528 0.83376-0.19572 2.175-0.20061 2.2894-0.22461 4.7406 0.07406 4.4097 0.07406 4.4097 1.3746-0.53753 6.4447-1.838 6.4447-1.838 1.4848-0.34547 3.248-0.71658 5.3122-1.0979 1.4515 2.9253 4.4655 4.9367 7.9519 4.9367 4.3536 0 7.9714-3.1348 8.7291-7.2683 9.5153-1.0332 14.013-1.0625 19.889-0.28077-0.61648-3.2748-1.8083-6.19-1.8083-6.19"
          stroke="#000"
          fill="#4f2683"
          strokeWidth=".15625"
        />
      </g>
    </svg>
  );
}
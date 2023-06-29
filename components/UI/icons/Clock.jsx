export default function Clock({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3325 2.03681C7.53022 2.01493 7.71115 1.91541 7.83548 1.76013C7.95982 1.60484 8.01738 1.40653 7.9955 1.20881C7.97362 1.01109 7.87409 0.830166 7.71881 0.705829C7.56353 0.581492 7.36522 0.523933 7.1675 0.545813C3.416 0.960563 0.5 4.13906 0.5 8.00006C0.5 12.1423 3.85775 15.5001 8 15.5001C11.8595 15.5001 15.0372 12.5848 15.4542 8.83556C15.4761 8.63784 15.4186 8.43953 15.2942 8.28425C15.1699 8.12897 14.989 8.02944 14.7913 8.00756C14.5935 7.98568 14.3952 8.04324 14.2399 8.16758C14.0847 8.29192 13.9851 8.47284 13.9633 8.67056C13.7905 10.1931 13.0419 11.592 11.8708 12.5802C10.6997 13.5684 9.19489 14.0712 7.66495 13.9855C6.13501 13.8997 4.69584 13.2319 3.64251 12.119C2.58918 11.0061 2.00151 9.5324 2 8.00006C2.00004 6.5243 2.54389 5.10031 3.52761 4.00024C4.51133 2.90016 5.86592 2.20116 7.3325 2.03681ZM10.0753 0.793313C9.8857 0.745488 9.68497 0.773564 9.51581 0.87156C9.34665 0.969557 9.22245 1.12973 9.16964 1.31795C9.11684 1.50618 9.13962 1.70758 9.23313 1.87926C9.32664 2.05094 9.48348 2.17932 9.67025 2.23706C9.8855 2.29781 10.097 2.37056 10.3018 2.45456C10.4859 2.52985 10.6925 2.52889 10.876 2.45188C11.0595 2.37487 11.2048 2.22813 11.2801 2.04394C11.3554 1.85975 11.3544 1.65319 11.2774 1.46971C11.2004 1.28623 11.0537 1.14085 10.8695 1.06556C10.6101 0.959781 10.345 0.868883 10.0753 0.793313ZM12.0118 2.51831C12.0784 2.44577 12.1586 2.38706 12.248 2.34554C12.3373 2.30402 12.4339 2.2805 12.5323 2.27632C12.6307 2.27214 12.729 2.28739 12.8215 2.32119C12.914 2.35499 12.999 2.40668 13.0715 2.47331C13.2305 2.61881 13.3828 2.77106 13.5283 2.92931C13.6627 3.07591 13.7334 3.26992 13.7249 3.46866C13.7163 3.66741 13.6291 3.8546 13.4825 3.98906C13.3359 4.12353 13.1419 4.19425 12.9431 4.18567C12.7444 4.17709 12.5572 4.08991 12.4227 3.94331C12.3066 3.81661 12.185 3.695 12.0582 3.57881C11.9856 3.51229 11.9268 3.4321 11.8851 3.34284C11.8435 3.25358 11.8198 3.15698 11.8155 3.05857C11.8112 2.96016 11.8263 2.86186 11.86 2.76929C11.8936 2.67672 11.9452 2.59095 12.0118 2.51831ZM7.25 3.50006C7.44891 3.50006 7.63968 3.57908 7.78033 3.71973C7.92098 3.86039 8 4.05115 8 4.25006V8.00006H10.25C10.4489 8.00006 10.6397 8.07908 10.7803 8.21973C10.921 8.36039 11 8.55115 11 8.75006C11 8.94898 10.921 9.13974 10.7803 9.28039C10.6397 9.42105 10.4489 9.50006 10.25 9.50006H7.25C7.05109 9.50006 6.86032 9.42105 6.71967 9.28039C6.57902 9.13974 6.5 8.94898 6.5 8.75006V4.25006C6.5 4.05115 6.57902 3.86039 6.71967 3.71973C6.86032 3.57908 7.05109 3.50006 7.25 3.50006ZM13.955 4.71731C14.1391 4.64204 14.3455 4.64298 14.529 4.71991C14.7124 4.79685 14.8577 4.94348 14.933 5.12756C15.0393 5.38789 15.1307 5.65407 15.2067 5.92481C15.2363 6.0205 15.2464 6.12114 15.2365 6.2208C15.2266 6.32046 15.1968 6.41712 15.1489 6.50507C15.1009 6.59302 15.0359 6.67049 14.9576 6.7329C14.8793 6.79532 14.7892 6.84141 14.6928 6.86846C14.5963 6.89551 14.4955 6.90297 14.3961 6.89041C14.2968 6.87784 14.2009 6.8455 14.1142 6.7953C14.0276 6.74509 13.9519 6.67804 13.8915 6.59809C13.8312 6.51814 13.7875 6.42692 13.763 6.32981C13.7023 6.11436 13.6294 5.90252 13.5447 5.69531C13.4694 5.51131 13.4703 5.30494 13.5471 5.12155C13.6238 4.93816 13.7703 4.79276 13.9542 4.71731H13.955Z"
        fill={color}
      />
    </svg>
  );
}
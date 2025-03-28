const NavbarStyled = `
:host {
  --white: #ffffff;
  --secondary-emphasis: #f1f3f4;
  --secondary: #5f6368;
  --dark: #202124;
  --border-color: #dadce0;
  --primary: #fbbc04;
  --danger: #ea4335;
  --success: #34a853;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
header {
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
header .left-section {
    display: flex;
    align-items: center;
}
header .search-section {
    margin-left: 1.5rem;
}
header img {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
}
h1 {
    margin: 0;
    font-size: 1.5rem;
}
#clock {
    font-size: 1rem;
}

@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: center;
        gap : 1rem;
    }

    h1 {
        font-size: 0.9rem;
        text-align: center;
    }
  }
`;

export default NavbarStyled;

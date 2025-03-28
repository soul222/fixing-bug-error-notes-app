const ListStyled = `
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
 :host {
    display: block;
    width: 100%;
  }

.note-list, 
.archive-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
}

.empty-state {
  text-align: center;
  color: #888;
  padding: 2rem;
  grid-column: 1 / -1;
}
`;

export default ListStyled;

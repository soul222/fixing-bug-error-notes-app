const ItemsStyled = `
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css');

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

{
  display: block;
  width: 100%;
}

.note-card {
  background: white;
  border: 1px solid #e8e6e6;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
}

.note-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

p {
  font-size: 1rem;
  margin: 0.5rem 0;
  white-space: pre-wrap;
}

.created-at {
  font-size: 0.85rem;
  color: #777;
  display: block;
  margin-top: 0.5rem;
}

.note-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
  margin-top: 0.5rem;
}

.note-card:hover .note-actions {
  opacity: 1;
}

.note-actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s;
  padding: 0.25rem;
  border-radius: 4px;
}

.note-actions .archive-btn {
  color: var(--success);
}

.note-actions .delete-btn {
  color: var(--danger);
}

.note-actions button:hover {
  background-color: rgba(0,0,0,0.05);
}
`;

export default ItemsStyled;
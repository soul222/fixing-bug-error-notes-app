const LoadingStyled = `
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

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s;
}
  
.loading-container.visible {
  visibility: visible;
  opacity: 1;
}
  
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
  
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default LoadingStyled;

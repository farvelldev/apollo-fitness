import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary = true, type = "button", onClick }) => {  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`
        btn
        ${primary ? 'btn-primary' : 'btn-secondary'}
      `} 
    >
      {children}
    </button>
  );
};

export default Button;
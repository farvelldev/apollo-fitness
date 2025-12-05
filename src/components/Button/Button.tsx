import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary = true, onClick }) => {
  const className = primary ? 'btn btn-primary' : 'btn btn-secondary';
  
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
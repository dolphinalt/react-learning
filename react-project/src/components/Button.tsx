interface ButtonProps {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';   // this is how to have an optional prop and limit the props to only a few selections
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>;
};

export default Button;

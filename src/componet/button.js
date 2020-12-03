const Button = ({ onPress, title, style }) => (
    <div onClick={onPress} style={style.button}>
        <p style={style.text}>{title}</p>
    </div>
);
export default Button;
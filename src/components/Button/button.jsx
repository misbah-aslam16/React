import Button from 'react-bootstrap/Button';


const Btn = (props) => {
    return (
<Button
    className="px-5 py-2 align-items-center rounded-pill"
    style={{ backgroundColor: '#39DB4A', borderColor: '#39DB4A' }}
>
{ props.value}
</Button>

    );
};

export default Btn;
import Button from '@mui/material/Button';

//component declaration
export function Phone({ mobile }) {
  // const mobile = {
  // "model": "OnePlus 9 5G",
  // "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  // "company": "Oneplus"
  // };
  return (
    <div>
      <div className='phone-container'>
        <img className='phone-picture' src={mobile.img} alt={mobile.model} />
        <h2 className='phone-name'>{mobile.model}</h2>
        <p className='phone-company'>{mobile.company}</p>
        <Button sx={{ width: "100%" }} color={"error"} type="submit" variant="contained">DELETE</Button>
      </div>
    </div>
  );
}

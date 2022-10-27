import * as React from 'react';
import Typography from '@mui/material/Typography';
import '../../../App.css'

// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

export default function Review({formData,setFormData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        verification registration
      </Typography>
      <div className='review'>
        <div className='items'>
        <span>The shop name : </span>
        <span>{formData.name}</span>
        </div>
        <div className='items'>
        <span>Full name :</span>
        <span>{formData.Fullname}</span>
        </div>
        <div className='items'>
        <span>Email :</span>
        <span>{formData.email}</span>
        </div>
        <div className='items'>
        <span>Cin :</span>
        <span>{formData.cin}</span>
        </div>
        <div className='items'>
        <span>Phone number :</span>
        <span>{formData.phonenumber}</span>
        </div>
        <div className='items'>
        <span>Address :</span>
        <span>{formData.address}</span>
        </div>
        <div className='items'>
        <span>Postal code :</span>
        <span>{formData.postalcode}</span>
        </div>
        <div className='items'>
        <span>Ville :</span>
        <span>{formData.city}</span>
        </div>
        <div className='items'>
        <span>Fullname of business owner :</span>
        <span>{formData.Fullname}</span>
        </div>
        <div className='items'>
        <span>Tax identification number :</span>
        <span>{formData.tax}</span>
        </div>
      </div>

      
    </React.Fragment>
  );
}
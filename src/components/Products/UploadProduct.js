import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Header from '../Header/header'; // Assuming you have a Header component

const ProductUpload = () => {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [SecondContent, setSecondContent] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [istrending, setIstrending] = useState(false);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [publishedby, setPublishedby] = useState('');
  const [message, setMessage] = useState('');
  
  // New state to store the uploaded product data
  const [uploadedProduct, setUploadedProduct] = useState(null);

  const handleImageChange = (event) => setImage(event.target.files[0]);
  const handleImage2Change = (event) => setImage2(event.target.files[0]);
  const handleImage3Change = (event) => setImage3(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Content', Content);
    formData.append('SecondContent', SecondContent);
    formData.append('CategoryID', categoryID);
    formData.append('istrending', istrending ? '1' : '0');
    formData.append('ImageUrl', image);
    formData.append('SecondImageUrl', image2);
    formData.append('ThirdImageUrl', image3);
    formData.append('publishedby', publishedby);

    try {
      // Log form data to check
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ': ' + pair[1]);
      // }
console.log(formData)
      // Send data to your API
      const response = await axios.post('https://prnews.today/api/products', formData,{
        headers: {
               'Content-Type': 'multipart/form-data'
             
              },
      
     } );

      console.log('Response:', response);

      // Save the uploaded product data to state
      setUploadedProduct({
        Title: Title,
        Content: Content,
        SecondContent: SecondContent,
        CategoryID: categoryID,
        IsTrending: istrending ? 'Yes' : 'No',
        PublishedBy: publishedby,
        Images: [image.name, image2?.name, image3?.name], // Get image file names
      });

      setMessage('Product uploaded successfully!');
    } catch (error) {
      console.error('Error uploading product:', error.response ? error.response.data : error.message);
      setMessage('Error uploading product');
    }
  };

  return (
    <>

      <div style={{ background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper style={{ padding: 20, width: '500px' }}>
          <Typography variant="h4" style={{ marginBottom: 20 }}>Upload Product</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              fullWidth
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={4}
              value={Content}
              onChange={(e) => setContent(e.target.value)}
              style={{ marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="SecondContent"
              fullWidth
              multiline
              rows={4}
              value={SecondContent}
              onChange={(e) => setSecondContent(e.target.value)}
              style={{ marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="CategoryID"
              fullWidth
              value={categoryID}
              onChange={(e) => setCategoryID(e.target.value)}
              style={{ marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Publishedby"
              fullWidth
              value={publishedby}
              onChange={(e) => setPublishedby(e.target.value)}
              style={{ marginBottom: 20 }}
              InputLabelProps={{ shrink: true }}
            />

            {/* Image Upload */}
            <input type="file" onChange={handleImageChange} style={{ marginBottom: 20 }} />
            <input type="file" onChange={handleImage2Change} style={{ marginBottom: 20 }} />
            <input type="file" onChange={handleImage3Change} style={{ marginBottom: 20 }} />

            {/* Trending Option */}
            <TextField
              label="istrending"
              fullWidth
              type="checkbox"
              checked={istrending}
              onChange={(e) => setIstrending(e.target.checked)}
              style={{ marginBottom: 20 }}
            />

            <Button type="submit" variant="contained" color="primary" style={{ marginBottom: 20, marginRight: 10 }}>
              Upload Product
            </Button>
          </form>

          {message && <Typography>{message}</Typography>}

          {/* Display uploaded product data */}
         
        </Paper>
      </div>
    </>
  );
};

export default ProductUpload;

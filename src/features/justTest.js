import React, {useState} from 'react'

const JustTest = props =>{
const {image}=props;
const[Image,SetImage]=useState(image);
    const onSubmit=(event)=>{
        const data=new FormData();
      data.append('image',image);

      fetch('http://192.168.100.105:8000',{
          method:'POST',
          body:data,
      }).then((response)=>{
          response.json().then(ad=>{
              let ads=this.state.ads;
              ads=[...ads,ad.file];
              this.setState({ads:ads});
          }) 
              .catch(err=>console.log('failed to upload image'));
      }).catch(err=>console.log('error uploading image'));
    }
    return(
        <div className="container">
            <div className="row">
                <form>
                    <h3>React File Upload</h3>
                    <div className='d-flex flex-row'>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" onChange={(event) => onSubmit(event)}>Upload</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default JustTest
// node js backend
// const uploadAd= (req,res,db,urlExists)=>{
//     //some security here so i make sure that the upload is an valid image
//     db('ads')
//         .insert({
//             image: ad.name
//         })
//         .returning('id')
//         .then(id => {
//             db('ads').update({
//                 image: `ad${id[0]}.${ext}`
//             })
//              //just want to store all ad images as ad{adid}
//                 .where('id', '=', id[0])
//                 .returning(['image'])
//                 .then(data => {
//                     let img = data[0].image;
    
//                     const reqPath = path.join(__dirname, '..\\..\\');
//                     //uploading the file to the public folder
//                     ad.mv(`${reqPath}/public/${img}`, (err) =>{
//                         if (err) {
//                             return res.status(500).send(err);
//                         }
//                         res.json({
//                             file: `${img}`
//                         });
//                     });
//                 }).catch(err => console.log(err));
//         }).catch(err => console.log(err));
//     };
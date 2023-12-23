
fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/sofa.json')
        .then( res => res.json() )
        .then( data => {
            console.log(Object.entries(data).length);
            
        })
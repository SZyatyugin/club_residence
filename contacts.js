
    let geocoder;
    let map;
    let salesOffice='КИЕВ,ПЕРЕУЛОК РАДИСТОВ, 40';
    let clubResidence='КИЕВ,ПЕРЕУЛОК РАДИСТОВ, 16';
    let clubHouse='КИЕВ,ПЕРЕУЛОК РАДИСТОВ, 14А'
    
        let mapPos=document.getElementById('map');
    let arr=[
        {address:salesOffice,
            img:'/images/sales_point.png'
            },
        {address:clubResidence,
            img:'/images/residence_point.png'
       },
        {address:clubHouse,
            img:'/images/club_point.png'
        }
        ];
        function initMap(){
    geocoder=new google.maps.Geocoder();
    let mapOptions={
        zoom:15,
        
    }
    map=new google.maps.Map(mapPos,mapOptions);
    let pos=[];
    for(let i=0;i<arr.length;i++){
        
        geocoder.geocode({'address':arr[i].address},function(results,status){
          
                map.setCenter(results[0].geometry.location);
                pos.push(results[0].geometry.location); 
                let marker=new google.maps.Marker({
                    map:map,
                    position:results[0].geometry.location,
                    icon:arr[i].img
                })  
    });
    }
    }
    
    


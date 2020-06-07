 app.controller("mainController", ['$scope', function($scope){
    
    $scope.cities = [];
    $scope.selectedCity;
    $scope.universities = [];
    $scope.selectedUniversity;
    $scope.apartments = [];

    function init(){
        //get cities and populate city selector
        $scope.cities = [ {id: 0, name: "All cities.."}, { id: 1, name: "London" }, { id: 2, name: "Manchester"}, {id: 3, name: "Edingburgh"}, { id: 4, name: "Liverpool"},{id:5, name: "Cardiff"} ];
        $scope.selectedCity = 0;
        $scope.selectedUniversity = 0;
        $scope.universities = GetUniversities();
        $scope.apartments = GetApartments();
    }

    $scope.cityChanged = function(selected){
        console.log("Selected city id: " + selected);                
        var universityList = [];
        var rtnUniversities = [{id: 0, name: "Select.."}];
        var apartmentList = [];
        var rtnApartments = [];

        if($scope.selectedCity !== 0){

            //Populate university dropdown with this citys universities
            universityList = GetUniversities();            
            for(var i = 0;i < universityList.length; i++){
                
                if(universityList[i].cityId === $scope.selectedCity)
                {
                    rtnUniversities.push(universityList[i]);
                }
            }
            $scope.universities = rtnUniversities;
            $scope.selectedUniversity = 0;

            //Populate apartment list with this citys apartments            
            apartmentList = GetApartments();
            for(var j=0; j<apartmentList.length; j++){
                if(apartmentList[j].cityId === $scope.selectedCity){
                    rtnApartments.push(apartmentList[j]);   
                }
            }
            $scope.apartments = rtnApartments;

        }
        else{
            $scope.universities = GetUniversities();
            $scope.selectedUniversity = 0;
            $scope.apartments = GetApartments();
        }
    }

    $scope.universityChanged = function(selected) {
        var locationList = LocationTable();
        var tmpApartmentIdList = [];
        var apartmentList = GetApartments();
        var rtnApartments = []; 
        console.log("Selected university id " + selected);
        for(var k = 0; k < locationList.length; k++){
           if(locationList[k].universityId === selected){
                tmpApartmentIdList.push({"apartmentId": locationList[k].apartmentId});
            }            
       }   

       for(l = 0; l < tmpApartmentIdList.length; l++){
            if(apartmentList.find(x => x.id === tmpApartmentIdList[l].apartmentId)){
                var apartment = apartmentList.find(x => x.id === tmpApartmentIdList[l].apartmentId);
                rtnApartments.push(apartment);
            }          
       }

       $scope.apartments = rtnApartments;
      
    }

    init();

    function GetUniversities(){
         var rtnVal = [
            {id: 0, name: "Select.."},
            {id: 1, name: "University of London", cityId: 1},
            {id: 2, name: "University College London", cityId: 1},
            {id: 3, name: "Other", cityId: 1},
            {id: 4, name: "University of Manchester", cityId: 2},
            {id: 5, name: "Manchester Metropolitian University", cityId: 2},
            {id: 6, name: "Other", cityId: 2},
            {id: 7, name: "University of Edinburgh", cityId: 3},
            {id: 8, name: "Edinburgh Napier University", cityId: 3},
            {id: 9, name: "Other", cityId: 3},
            {id: 10, name: "Liverpool University", cityId: 4},
            {id: 11, name: "Liverpool John Moores University", cityId: 4},
            {id: 12, name: "Other", cityId: 4},
            {id: 13, name: "Cardiff University", cityId: 5},
            {id: 14, name: "University of Wales", cityId: 5},
            {id: 15, name: "Other", cityId: 5},
        ]
        return rtnVal;
    }

    function GetApartments(){
        var rtnVal = [            
            {id: 1, cityId: 1, University: "University of London", city: "London", Roommates: 2, price: 400, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img1.jpg"},
            {id: 2, cityId: 1, University: "University of London", city: "London", Roommates: 2, price: 350, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img2.jpg" },
            {id: 3, cityId: 1, University: "University of London",  city: "London", Roommates: 3, price: 500, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img3.jpg" },
            {id: 4, cityId: 1, University: "University College London", city: "London", Roommates: 3, price: 1200, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img4.jpg" },
            {id: 5, cityId: 1, University: "University College London", city: "London", Roommates: 4, price: 1000, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img5.jpg" },
            {id: 6, cityId: 1, University: "University College London", city: "London", Roommates: 1, price: 600, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img6.jpg" },
            {id: 7, cityId: 1, University: "Centrum", city: "London", Roommates: 3, price: 900, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img7.jpg" },
            {id: 8, cityId: 1, University: "Downtown", city: "London", Roommates: 2, price: 700, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img8.jpg" },
            {id: 9, cityId: 1, University: "London Bridge", city: "London", Roommates: 2, price: 950, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img9.jpg" },
            {id: 10, cityId: 2, University: "University of Manchester", city: "Manchester", Roommates: 2, price: 900, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img10.jpg" },
            {id: 11, cityId: 2, University: "University of Manchester",  city: "Manchester", Roommates: 3, price: 1100, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img11.jpg" },
            {id: 12, cityId: 2, University: "University of Manchester", city: "Manchester", Roommates: 1, price: 620, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img12.jpg" },
            {id: 13, cityId: 2, University: "Man Metro Uni",  city: "Manchester", Roommates: 4, price: 1460, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img13.jfif" },
            {id: 14, cityId: 2, University: "Man Metro Uni", city: "Manchester", Roommates: 2, price: 872, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img14.jpg" },
            {id: 15, cityId: 2, University: "Man Metro Uni",  city: "Manchester", Roommates: 2, price: 850, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img15.jpg" },
            {id: 16, cityId: 2, University: "Centrum", city: "Manchester", Roommates: 1, price: 550, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img1.jpg"},
            {id: 17, cityId: 2, University: "Downtown", city: "Manchester", Roommates: 2, price: 400, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img2.jpg" },
            {id: 18, cityId: 2, University: "Manchester Stadion",  city: "Manchester", Roommates: 3, price: 1361, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img3.jpg" },
            {id: 19, cityId: 3, University: "University of Edinburgh", city: "Edinburgh", Roommates: 1, price: 400, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img4.jpg" },
            {id: 20, cityId: 3, University: "University of Edinburgh", city: "Edinburgh", Roommates: 2, price: 600, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img5.jpg" },
            {id: 21, cityId: 3, University: "University of Edinburgh", city: "Edinburgh", Roommates: 2, price: 726, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img6.jpg" },
            {id: 22, cityId: 3, University: "Edinburgh Napier University", city: "Edinburgh", Roommates: 4, price: 1532, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img7.jpg" },
            {id: 23, cityId: 3, University: "Edinburgh Napier University", city: "Edinburgh", Roommates: 3, price: 1036, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img8.jpg" },
            {id: 24, cityId: 3, University: "Edinburgh Napier University", city: "Edinburgh", Roommates: 2, price: 850, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img9.jpg" },
            {id: 25, cityId: 3, University: "Centrum", city: "Edinburgh", Roommates: 1, price: 550, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img10.jpg" },
            {id: 26, cityId: 3, University: "Downtown",  city: "Edinburgh", Roommates: 2, price: 400, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img11.jpg" },
            {id: 27, cityId: 3, University: "Scottish Castle", city: "Edinburgh", Roommates: 3, price: 1146, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img12.jpg" },
            {id: 28, cityId: 4, University: "Liverpool University",  city: "Liverpool", Roommates: 1, price: 550, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img13.jfif" },
            {id: 29, cityId: 4, University: "Liverpool University", city: "Liverpool", Roommates: 2, price: 743, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img14.jpg" },
            {id: 30, cityId: 4, University: "Liverpool University",  city: "Liverpool", Roommates: 2, price: 756, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img15.jpg" },
            {id: 31, cityId: 4, University: "Liv John Moores Uni",  city: "Liverpool", Roommates: 4, price: 1205, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img1.jpg" },
            {id: 32, cityId: 4, University: "Liv John Moores Uni", city: "Liverpool", Roommates: 3, price: 986, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img2.jpg"},
            {id: 33, cityId: 4, University: "Liv John Moores Uni", city: "Liverpool", Roommates: 2, price: 689, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img3.jpg" },
            {id: 34, cityId: 4, University: "Centrum",  city: "Liverpool", Roommates: 1, price: 478, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img4.jpg" },
            {id: 35, cityId: 4, University: "Downtown", city: "Liverpool", Roommates: 3, price: 768, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img5.jpg" },
            {id: 36, cityId: 4, University: "Liverpool Stadion", city: "Liverpool", Roommates: 3, price: 1234, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img6.jpg" },
            {id: 37, cityId: 3, University: "Cardiff University", city: "Cardiff", Roommates: 1, price: 680, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img7.jpg" },
            {id: 38, cityId: 3, University: "Cardiff University", city: "Cardiff", Roommates: 2, price: 900, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img8.jpg" },
            {id: 39, cityId: 3, University: "Cardiff University", city: "Cardiff", Roommates: 1, price: 500, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img9.jpg" },
            {id: 40, cityId: 3, University: "University of Wales", city: "Cardiff", Roommates: 3, price: 1200, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img10.jpg" },
            {id: 41, cityId: 3, University: "University of Wales", city: "Cardiff", Roommates: 2, price: 800, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img11.jpg" },
            {id: 42, cityId: 3, University: "University of Wales",  city: "Cardiff", Roommates: 5, price: 2000, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img12.jpg" },
            {id: 43, cityId: 3, University: "Centrum", city: "Cardiff", Roommates: 1, price: 600, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img13.jfif" },
            {id: 44, cityId: 3, University: "Downtown",  city: "Cardiff", Roommates: 3, price: 750, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img14.jpg" },
            {id: 45, cityId: 3, University: "Dragons", city: "Cardiff", Roommates: 2, price: 690, contact: "(+44)555-555-55", imageUrl: "Billeder/Apartment/img15.jpg" },
        ]
        return rtnVal;
    }

    function LocationTable(){
        //universityId, apartmentId
        var rtnValues = [
            {universityId: 1, apartmentId: 1 },
            {universityId: 1, apartmentId: 2 },
            {universityId: 1, apartmentId: 3 },
            {universityId: 2, apartmentId: 4 },
            {universityId: 2, apartmentId: 5 },
            {universityId: 2, apartmentId: 6 },
            {universityId: 3, apartmentId: 7 },
            {universityId: 3, apartmentId: 8 },
            {universityId: 3, apartmentId: 9 },
            {universityId: 4, apartmentId: 10 },
            {universityId: 4, apartmentId: 11 },
            {universityId: 4, apartmentId: 12 },
            {universityId: 5, apartmentId: 13 },
            {universityId: 5, apartmentId: 14 },
            {universityId: 5, apartmentId: 15 },
            {universityId: 6, apartmentId: 16 },
            {universityId: 6, apartmentId: 17 },
            {universityId: 6, apartmentId: 18 },
            {universityId: 7, apartmentId: 19 },
            {universityId: 7, apartmentId: 20 },
            {universityId: 7, apartmentId: 21 },
            {universityId: 8, apartmentId: 22 },
            {universityId: 8, apartmentId: 23 },
            {universityId: 8, apartmentId: 24 },
            {universityId: 9, apartmentId: 25 },
            {universityId: 9, apartmentId: 26 },
            {universityId: 9, apartmentId: 27 },
            {universityId: 10, apartmentId: 28 },
            {universityId: 10, apartmentId: 29 },
            {universityId: 10, apartmentId: 30 },
            {universityId: 11, apartmentId: 31 },
            {universityId: 11, apartmentId: 32 },
            {universityId: 11, apartmentId: 33 },
            {universityId: 12, apartmentId: 34 },
            {universityId: 12, apartmentId: 35 },
            {universityId: 12, apartmentId: 36 },
            {universityId: 13, apartmentId: 37 },
            {universityId: 13, apartmentId: 38 },
            {universityId: 13, apartmentId: 39 },
            {universityId: 14, apartmentId: 40 },
            {universityId: 14, apartmentId: 41 },
            {universityId: 14, apartmentId: 42 },
            {universityId: 15, apartmentId: 43 },
            {universityId: 15, apartmentId: 44 },
            {universityId: 15, apartmentId: 45 },

        ]
        return rtnValues;
    }

 }]);



 /*<option value = "0">Select</option>
                        <option value = "1">University of east London</option>
                        <option value = "2">The University of West London</option>
                        <option value = "3">Royal Holloway</option>                        */
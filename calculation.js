function calculate() {
    // 1. collect input data
    let trashNorm = houseTypeSelect.value; 
    
    let bodies = personsInput.value;

    if (isNaN(+bodies) || bodies < 1) {
        bodies = 1;
        personsInput.value = bodies;
    }

    let job1 = tip1.checked;

    let job2 = tip2.checked;

    let job3 = tip3.checked;

    let job4 = tip4.checked;

    let job5 = tip5.checked;
    

    // 2. do actual calculation

    let discountPercents = 0;

    if (job1) {
        discountPercents = discountPercents + 15;
    } 
    if (job2) {
        discountPercents = discountPercents + 15;
    } 
    if (job3) {
        discountPercents = discountPercents + 15;
    } 
    if (job4) {
        discountPercents = discountPercents + 15;
    } 
    if (job5) {
        discountPercents = discountPercents + 15;
    } 

    let volumeOnePerson = trashNorm / 100 * (100 - discountPercents);

    let volumePersons = volumeOnePerson * bodies;

    let gasResult = volumePersons * 1.113;

    // 3. output results
    
   resultCubicMeters.innerText = Math.round(volumePersons);

   resultGas.innerText = Math.round(gasResult);

   labelLeaf.classList.remove('active');
   lableCup.classList.remove('active');
   labelBag.classList.remove('active');
   labelBucket.classList.remove('active');
   labelLandfield.classList.remove('active');


    if (volumeOnePerson >= 2300) {
        labelLandfield.classList.add('active');
    } 
    else if (volumeOnePerson >= 1500) {
        labelBucket.classList.add('active');
    }
    else if (volumeOnePerson >= 600) {
        labelBag.classList.add('active');
    }
    else if (volumeOnePerson >= 400) {
        lableCup.classList.add('active');
    }
    else {
        labelLeaf.classList.add('active');
    }
}

calculate();
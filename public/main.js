var trash = document.getElementsByClassName("trashCan");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.childNodes[1].innerText
        const pokemonSpecies = this.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'pokemonSpecies': pokemonSpecies
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

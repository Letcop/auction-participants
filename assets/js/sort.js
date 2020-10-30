

$(document).ready(function() {
  $('main .yourself_top_info').hide();
  $('main .yourself_top_info:first-child').show();
  $('.radio_button').click(function() {
    let pageInfo = $(this).attr('data-radio');
    $('main .yourself_top_info').hide();
    $('.' + pageInfo).show();
  })

});

let checkButton = document.querySelector('.check_disabled_btn');
let myCheckButtons = document.querySelectorAll('.myCheckBtn');

checkButton.disabled = true;
myCheckButtons.forEach((checkedBtn) => {
  checkedBtn.addEventListener('click', () => {
    if(checkedBtn.checked == true) {
      checkButton.disabled = false;
    }
  })
})


// сортировка по ставку
let items = document.querySelector('.auction_participant_cards');
document.querySelector('button.place_bet_button').onclick = function () {
  sortList('data-sort');
}

function sortList(sortType) {
  let items = document.querySelector('.auction_participant_cards');
  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
        console.log(1);
        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}


function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




// function addMyCardInfo () {
//   sortList('data-sort');
//   let usersNum = document.querySelector('.auction_participants_num');
//   let auctionParticipantCards = document.querySelector('.auction_participant_cards');
//   let inputValue = document.querySelector('.place_bet_input').value;
//   let divCardElem = document.createElement('div');
//   let myadvertising = document.createElement('div');
//   myadvertising.className = 'my_advertising'

//   myadvertising.innerHTML = `<h6>Место для реклама</h6>`

//   divCardElem.className = 'col-lg-4';
//   divCardElem.setAttribute('data-sort', inputValue)
//   divCardElem.innerHTML = `<div class="auction_participants_list">
//   <img src="assets/images/user8.png" alt="">
//   <div class="user_info">
//     <span class="name">Исмет Икрамов</span>
//     <span class="nick_name">masterWeb011</span>
//     <div class="user_level d-flex">
//       <span class="user_level_num pr-2">1</span>
//       <span>место</span>
//     </div>
//   </div>
//   <div>
//     <div class="bet_moneys d-flex"><span class="bet_money mr-2">${inputValue}</span> <span>$</span></div>
//     <div class="d-flex"><span class="fixed_day mr-2">1</span><span>день</span></div>
//   </div>
// </div>`

//   items.append(divCardElem);
//   advertisingLidts.append(myadvertising)

//   function upDateUserCount() {
//     usersNum.innerHTML = auctionParticipantCards.children.length
//   }
//   upDateUserCount();
// }

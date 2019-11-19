$(document).ready(function($) {
  let imageWrapper = $(".slider-content");
  let navigation__btn = $(".navigation__btn");
  let imagesList = imageWrapper.children(".slider-item");
  let imagesListLength = imagesList.length;

  createNavigationCircle(imagesListLength);

  navigation__btn.on("click", function() {
    let direction = $(this);
    let index = getIndexVisibleImg(imageWrapper);

    if (!direction.hasClass("inactive")) {
      if (direction.hasClass("btn-next")) {
        index++;
      } else {
        index--;
      }
    }

    let currentImageItem = imagesList.eq(index);
    let imageLength = imagesListLength;

    updateButton(index, imageLength);
    updateCircleNavigation(index);
    classUpdate(currentImageItem);
  });
});

function getIndexVisibleImg(imageWrapper) {
  let imagesList = imageWrapper.children(".slider-item");
  return imagesList.index(imageWrapper.children(".slider-item.active"));
}

function createNavigationCircle(length) {
  let circleContainer = $(".navigation-circle");
  let circleItem = '<div class="navigation-circle__item"></div>';
  for (let i = 0; i < length; i++) {
    circleContainer.append(circleItem);
  }
  updateCircleNavigation(getIndexVisibleImg($(".slider-content")));
}

function updateButton(n, imageLength) {
  let ButtonNext = $(".btn-next");
  let ButtonPrev = $(".btn-prev");
  if (n == 0) {
    ButtonPrev.addClass("inactive");
  } else {
    ButtonPrev.removeClass("inactive");
  }
  if (n + 1 >= imageLength) {
    ButtonNext.addClass("inactive");
  } else {
    ButtonNext.removeClass("inactive");
  }
}

function updateCircleNavigation(index) {
  let circleList = $(".navigation-circle__item");
  let currentCircleItem = circleList.eq(index);
  currentCircleItem.siblings().removeClass("is-selected");
  currentCircleItem.addClass("is-selected");
}

function classUpdate(item) {
  item.siblings().removeClass("active");
  item.addClass("active").removeClass("moveright");
  item.siblings().removeClass("moveright--top");
  item.next().addClass("moveright--top");
  item.nextAll().addClass("moveright");
  item.prevAll().removeClass("moveright");
}

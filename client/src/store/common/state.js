export default function () {
  return {
      restaurants:[],
      mainPageInfo:{image:{url:''}},
      menus:[],
      promotions:[],
      bonusInfo:{},
      feedbacks:[],
      zoom:13,
      choosenRest:{id:null,latitude:'52.283069' , longitude:'104.285819'},
      order: {
          phone: null,
          address: null,
          time: null,
          early: false,
          comment: null,
      },
      orderProducts:[],
  }
}

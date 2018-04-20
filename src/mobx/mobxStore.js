import {
    observable,
    computed,
    action,
} from 'mobx';


class mobxStore {

   @observable comments = [
          
   ];
    @observable text = "咳咳咳咳咳咳咳";
    @observable userName=''
    @observable content=''
    @observable nowtimes=''
    @observable timeString=''
    constructor(){
        this.times = 0
        this.userName=''
        this.content=''
        this.nowtimes=''
      }
    // 点击次数
    //input action改变值
     @action changeContent = (v)=>{
        this.content=v;
      }
      @action changeUserName = (v)=>{
        this.userName=v;
      }
      // @action updateTime(duration){
      //   this.duration = (+Date.now() - comment.createdTime) / 1000;
      //   var timeString
      //   if (duration <= 30) {
      //       timeString = `刚刚`
      //       // timeString:`${Math.round(duration / 60)} 分钟前`
      //   } else if (duration < 60) {
      //       timeString = `${Math.round(Math.max(duration, 1))} 秒前`
      //       // `${Math.round(Math.max(duration, 1))} 秒前`
      //   } else if (duration < 3600) {
      //       timeString = `${Math.round(Math.max(duration / 60, 1))}分钟前`
      //   } else if (duration < 216000) {
      //       timeString = `${Math.round(Math.max(duration / 3600, 1))}小时前`
      //   } else if (duration < 5184000) {
      //       timeString = `${Math.round(Math.max(duration / 216000, 1))}天前`
      //   } else {
      //       timeString = `long long ago`
      //   }
      //   return timeString
      // }

      
      @action submitComment=()=>{
        this.comments.push({
          userName:this.userName,
          content:this.content,
          createdTime: +Date.now(),
        })
        this.userName=''
        this.content=''
      }
       @action deleteComment=(index)=>{
        this.comments.splice(index, 1);
      }

      @observable times;
      @action addClick = ()=>{
        this.times +=1;
        this.text='白斑病白斑病白斑病'
      }
      

    /**  计算当前已吃和未吃苹果的状态 */
    @computed get status() {
      
    }


    /* 这里需要写成箭头函数的形式，这样此函数从父组件传递到子组件的时候才能调用成功*/

}

export default mobxStore;
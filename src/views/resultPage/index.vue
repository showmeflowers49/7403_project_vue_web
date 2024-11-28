<template>
    <div class="content">
        <div class="title">
            Vote Results
        </div>
        <div class="vote-result">
            <table border="1" cellpadding="10" cellspacing="0">
            <thead>
                <tr>
                <th>Name</th>
                <th>Votes</th>
                <th>Percentage</th>
                <th>Last Vote</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, key) in voteData" :key="key">
                <td>{{ data.name }}</td>
                <td>{{ data.vote_number }}</td>
                <td>{{ data.percentage }}</td>
                <td>{{ data.last_vote }}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            voteData:[]
        }
    },
    methods:{
        getData(){
            this.api.getVoteResults().then(res=>{
                if(res.code==200){
                    let totalCount = 0
                    let data = res.data
                    data.forEach(item=>{
                        totalCount += item.vote_number
                    })
                    data.forEach(item=>{
                        item.percentage = totalCount?((item.vote_number/totalCount*100).toFixed(2)+'%'):0
                    })
                    data.sort((a,b)=>a.id-b.id)
                    this.voteData = data
                }
            })
        }
    },
    beforeCreate() {
			
    },
    created() {
        
    },
    beforeMount() {
        
    },
    mounted() {
        this.$nextTick(() => {
            this.getData()
            this.interval = setInterval(this.getData,1500)
        })
    },
    beforeDestroy() {
        if(this.interval)
        clearInterval(this.interval)
    },
    destroyed() {
        
    }
}
</script>

<style lang="scss">
.content{
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url(../../../public/static/img/back.png);
    background-size: 100% 100%;

    .title {
        position: absolute;
        left: 50%;
        top: 160px;
        transform: translateX(-50%);
        z-index: 99;
        font-size: 36px;
        font-weight: bold;
        color: #ffffff;
    }

    /* 整体背景设置 */
// body {
//   background-color: #2c3e50; /* 深蓝色背景 */
//   color: #ecf0f1; /* 白色文字 */
//   font-family: 'Arial', sans-serif; /* 字体 */
//   margin: 0;
//   padding: 0;
//   height: 100vh; /* 满屏高度 */
//   display: flex;
//   justify-content: center;
//   align-items: center; /* 居中显示内容 */
// }

/* 表格容器 */
.vote-result {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  padding: 30px;
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

th, td {
  padding: 12px 20px;
  text-align: center;
  font-weight: bold;
}

th {
  background-color: #2980b9;
  color: white;
  font-size: 28px;
  text-transform: uppercase;
}

td {
  background-color: #ecf0f1;
  color: #2c3e50;
  font-size: 24px;
  border-bottom: 1px solid #bdc3c7;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #e67e22;
  cursor: pointer;
}

tbody tr:last-child td {
  border-bottom: none;
}

@media screen and (max-width: 768px) {
  table {
    width: 100%;
  }
  th, td {
    font-size: 14px;
  }
}

}
</style>
<template>
    <div class="content">
        <div v-if="showPopupSuccess||showPopupFailed" class="overlay"></div>
        <transition name="popup" @after-leave="afterLeave">
            <div v-if="showPopupSuccess" class="popup success">
                <h2>投票成功!</h2>
                <p>您对{{ voteName }}的投票已成功提交。</p>
            </div>
        </transition>
        <transition name="popup" @after-leave="afterLeave">
            <div v-if="showPopupFailed" class="popup failed">
                <h2>投票失败!</h2>
                <p>因网络原因投票失败。</p>
            </div>
        </transition>
        <div class="title">
            Vote Time —— Dogs vs Cats!
        </div>
        <div class="vote-content">
            <div class="vote-btn dog" @click="btnClick(2)">
                <span>Dogs</span>
            </div>
            <div class="vote-btn cat" @click="btnClick(1)">
                <span>Cats</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopupSuccess: false,
            showPopupFailed:false,
            voteName: 'dogs'
        }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    methods: {
        btnClick(index) {
            let t = new Date().toLocaleString()
            switch (index) {
                case 1:
                    this.api.updateVoteResults({ 'name': 'Cats', 'last_vote': t })
                    .then(res => {
                        if (res.code == 200) {
                            this.voteName = 'Cats'
                            this.showPopupMessage(1)
                        }else{
                            this.showPopupMessage(0)
                        }
                    })
                    .catch(error => {
                        this.showPopupMessage(0)
                    })
                    break;
                case 2:
                    this.api.updateVoteResults({ 'name': 'Dogs', 'last_vote': t })
                    .then(res => {
                        if (res.code == 200) {
                            this.voteName = 'Dogs'
                            this.showPopupMessage(1)
                        }else{
                            this.showPopupMessage(0)
                        }
                    })
                    .catch(error => {
                        this.showPopupMessage(0)
                    })
                    break;
            }
        },
        showPopupMessage(index) {
            if(index){
                this.showPopupSuccess = true;
                setTimeout(() => {
                    this.showPopupSuccess = false;
                }, 500);
            }else{
                this.showPopupFailed = true;
                setTimeout(() => {
                    this.showPopupFailed = false;
                }, 500);
            }
        },
        afterLeave() {
            // console.log("弹出框已完全消失");
        }
    },
    mounted() {
        this.$nextTick(() => {
            // this.api.getVoteResults()
        })
    },
    beforeDestroy() {

    },
    destroyed() {

    }
}
</script>

<style lang="scss" scoped>
.content {
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

    .vote-content {
        width: auto;
        height: auto;
        font-weight: 100;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        display: flex;
        flex-direction: row;

        div {
            height: 160px;
            width: 320px;
            text-align: center;
            line-height: 160px;
            margin: 10px;
            color: white;
            font-size: 32px;
            font-weight: bold;
            border: none;
            border-radius: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        div:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        div:active {
            transform: translateY(2px);
        }

        .cat {
            background: linear-gradient(135deg, #8e44ad, #2e0854);

            span {
                user-select: none;
            }
        }

        .dog {
            background: linear-gradient(135deg, #00bcd4, #1e3c72);

            span {
                user-select: none;
            }
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 100;
    }

    .popup {
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
        background-color: #7b7e8160;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        width: 300px;
        height: 80px;
        opacity: 0;
        z-index: 100;
        transition: opacity 0.3s ease, transform 0.5s ease;
    }

    .success h2 {
        margin: 0;
        font-size: 24px;
        color: #2ecc71;
    }

    .failed h2 {
        margin: 0;
        font-size: 24px;
        color: #cc382e;
    }

    .popup p {
        font-size: 18px;
        margin: 15px 0;
        color: white;
    }

    .popup-enter-active,
    .popup-leave-active {
        transition: opacity 0.5s, transform 0.5s;
    }

    .popup-enter,
    .popup-leave-to
        {
        opacity: 0;
        transform: translate(-50%, 20%);
    }

    .popup-enter-to {
        opacity: 1;
        transform: translate(-50%, -30%);
    }

    /* 退出时从当前位置滑出 */
    .popup-leave-to {
        opacity: 0;
        transform: translate(-50%, -60%);
    }

}</style>
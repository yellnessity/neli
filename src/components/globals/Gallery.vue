<template>
    <div>
      <a href="#" @click.prevent="show" class="thumbnail w-full">
          <img :src="thumbnail">
      </a>
      <div class="lightbox fixed pin z-50 flex justify-center items-center" v-if="visible" @click="hide">
          <div class="container1 fixed pin-r pin-t text-white cursor-pointer text-4xl p-1 mr-2" @click.stop="hide">&times;</div>
          <div class="flex">
              <div class="cursor-pointer self-center px-8"
                   @click.stop="prev"
                   :class="{'invisible': ! hasPrev()}">
                  <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                      <path d="M0-.5h24v24H0z" fill="none"/>
                  </svg>
              </div>
              <div class="lightbox-image" @click.stop="">
                  <img :src="images[index]">
              </div>
              <div class="cursor-pointer self-center px-8"
                   @click.stop="next"
                   :class="{'invisible': ! hasNext()}">
                  <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                      <path d="M0-.25h24v24H0z" fill="none"/>
                  </svg>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        thumbnail: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            visible: false,
            index: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
            this.index = 0;
        },
        hasNext() {
            return this.index + 1 < this.images.length;
        },
        hasPrev() {
            return this.index - 1 >= 0;
        },
        prev() {
            if (this.hasPrev()) {
                this.index -= 1;
            }
            else
            this.index = this.images.length - 1;
        },
        next() {
            if (this.hasNext()) {
                this.index += 1;
            }
            else
            this.index=0;
        },
        onKeydown(e) {
            if (this.visible) {
                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
};
</script>

<style scoped>
.thumbnail {
width: auto;
height: auto;
}

.thumbnail img {
width: 1000px;
height: 600px;
}

.lightbox {
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 50;
}

.container1 {
    position: fixed;
    top: 0px;
    right: 0px;
    color: white;
    cursor: pointer;
    font-size: 2.25rem;
    padding: 0.25rem;
    margin-right: 0.5rem;
}

.flex {
display: flex;
}

.cursor-pointer {
padding: 0 2rem;
align-self: center;
cursor: pointer;
}

.lightbox-image img {
    width: auto;
    height: auto;
    max-width: 100%;
}
</style>

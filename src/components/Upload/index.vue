<template>
    <div class="CosUpload" :class="type === 'avatar' ? 'avatarUpload' : ''">
        <el-upload
            ref="upload"
            class="upload-demo"
            :http-request="cosUpload"
            :drag="type === 'drag'"
            :action="action"
            :multiple="multiple"
            :show-file-list="showFileList"
            :list-type="listType"
            :auto-upload="autoUpload"
            :file-list="fileList"
            :limit="limit"
            :accept="accept"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :on-error="onError"
            :on-progress="onProgress"
            :on-change="onChange"
            :before-upload="onBeforeUpload"
            :before-remove="onBeforeRemove"
            :on-exceed="onExceed"
            :disabled="disabled"
            :data="uploadData"
        >
            <slot name="default" />
            <slot v-if="type === 'file'" name="file" />
            <slot v-if="type === 'drag'" name="drag">
                <i class="el-icon-upload" />
                <div class="el-upload__text">
                    将文件拖到此处，或
                    <em>点击上传</em>
                </div>
            </slot>
            <slot v-if="type === 'avatar'" name="avatar">
                <div v-if="imageUrl" class="avatarWrap" :style="{ width, height }">
                    <img :src="imageUrl" class="avatar" />
                    <div class="avatarMask">
                        <span>{{ uploadText }}</span>
                    </div>
                </div>
                <i v-else class="el-icon-plus avatar-uploader-icon" :style="{ width, height, lineHeight: height }" />
            </slot>
            <slot v-if="listType === 'picture-card'" name="pictureCard">
                <i class="el-icon-plus" />
            </slot>
            <!-- <slot name="tip" class="el-upload__tip"></slot> -->
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'CosUpload',
    props: {
        action: {
            type: String,
            default: '#', // 上传的地址
        },
        type: {
            type: String, // file 可根据插槽自定义上传模式 avatar 单图片模式  drag 可拖拽上传文件
            default: 'file', // 是否是单图片上传模式
        },
        imageUrl: {
            type: String,
            default: '', // 上传的单图片url
        },
        multiple: {
            type: Boolean,
            default: false, // 是否支持多选文件
        },
        headers: {
            type: Object,
            default: () => {}, // 设置的请求头
        },
        uploadData: {
            type: Object,
            default: () => {}, // 设置的请求参数
        },
        showFileList: {
            type: Boolean,
            default: true, // 是否显示上传列表
        },
        listType: {
            type: String,
            default: 'text', // 文件列表的类型
        },
        autoUpload: {
            type: Boolean,
            default: true, // 是否选取文件后立即上传
        },
        fileList: {
            type: Array,
            default: () => [], // 上传的文件列表
        },
        limit: {
            type: Number,
            default: 2, // 最大上传个数
        },
        replace: {
            type: Boolean,
            default: true, // 每次上传会替换之前的文件
        },
        accept: {
            type: String, // 接受上传文件的类型
            default: '*', // '.pdf,.doc,.docx'
        },
        beforeUpload: {
            type: Function, // 传入的上传前的回调函数
            default: () => {},
        },
        disabled: {
            type: Boolean,
            default: false, // 是否禁用
        },
        beforeRemoveFun: {
            type: Function, // 删除之前的回调函数
            default: () => {},
        },
        width: {
            type: String,
            default: '138px',
        },
        height: {
            type: String,
            default: '138px',
        },
        fileSize: {
            type: Number,
            default: 100, // MB
        },
        fileNumber: {
            // 记录上传的文件,只统计本次上传的文件数,多文件上传必传
            type: Number,
            default: 1,
        },
        uploadText: {
            type: String,
            default: '重新上传',
        },
    },
    data() {
        return {
            fileSuccessTotal: 0,
            fileErrorTotal: 0,
            allFiles: [],
            errFiles: [],
        };
    }
};
</script>

<style>
.avatarUpload {
    ::v-deep .el-upload {
        position: relative;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
    }

    ::v-deep .el-upload:hover {
        border-color: #409eff;
    }

    .avatarWrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .avatarMask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #fff;
            background: rgb(0 0 0 / 50%);
            opacity: 0;
            transition: 0.5s opacity;

            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }

        .avatarMask:hover {
            opacity: 1;
        }

        .avatar {
            /* height: 100%; */
            display: block;
            max-width: 100%;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            text-align: center;
            color: #8c939d;
        }
    }
}
</style>

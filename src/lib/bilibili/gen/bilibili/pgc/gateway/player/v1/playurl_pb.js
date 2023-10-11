// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/pgc/gateway/player/v1/playurl.proto (package bilibili.pgc.gateway.player.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CodeType, PlayURLReply, VideoInfo } from "../../../../app/playurl/v1/playurl_pb.js";

/**
 * 其他业务信息
 *
 * @generated from message bilibili.pgc.gateway.player.v1.BusinessInfo
 */
export const BusinessInfo = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.BusinessInfo",
  () => [
    { no: 1, name: "is_preview", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "bp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "marlin_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 事件
 *
 * @generated from message bilibili.pgc.gateway.player.v1.Event
 */
export const Event = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.Event",
  () => [
    { no: 1, name: "shake", kind: "message", T: Shake },
  ],
);

/**
 * 播放信息
 *
 * @generated from message bilibili.pgc.gateway.player.v1.LivePlayInfo
 */
export const LivePlayInfo = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.LivePlayInfo",
  () => [
    { no: 1, name: "current_qn", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "quality_description", kind: "message", T: QualityDescription, repeated: true },
    { no: 3, name: "durl", kind: "message", T: ResponseDataUrl, repeated: true },
  ],
);

/**
 * 直播播放页信息-响应
 *
 * @generated from message bilibili.pgc.gateway.player.v1.LivePlayViewReply
 */
export const LivePlayViewReply = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.LivePlayViewReply",
  () => [
    { no: 1, name: "room_info", kind: "message", T: RoomInfo },
    { no: 2, name: "play_info", kind: "message", T: LivePlayInfo },
  ],
);

/**
 * 直播播放页信息-请求
 *
 * @generated from message bilibili.pgc.gateway.player.v1.LivePlayViewReq
 */
export const LivePlayViewReq = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.LivePlayViewReq",
  () => [
    { no: 1, name: "ep_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "quality", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "ptype", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "https", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "play_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "device_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 禁用功能配置
 *
 * @generated from message bilibili.pgc.gateway.player.v1.PlayAbilityConf
 */
export const PlayAbilityConf = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.PlayAbilityConf",
  () => [
    { no: 1, name: "background_play_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "flip_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "cast_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "feedback_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "subtitle_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "playback_rate_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "time_up_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "playback_mode_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "scale_mode_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "like_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "dislike_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "coin_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "elec_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "share_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "screen_shot_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "lock_screen_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "recommend_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "playback_speed_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "definition_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "selections_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "next_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "edit_dm_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "small_window_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "shake_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 25, name: "outer_dm_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 26, name: "inner_dm_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 27, name: "freya_enter_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 28, name: "dolby_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 29, name: "freya_full_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 30, name: "skip_oped_switch_disable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 *  播放页信息-响应
 *
 * @generated from message bilibili.pgc.gateway.player.v1.PlayViewReply
 */
export const PlayViewReply = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.PlayViewReply",
  () => [
    { no: 1, name: "video_info", kind: "message", T: VideoInfo },
    { no: 2, name: "play_conf", kind: "message", T: PlayAbilityConf },
    { no: 3, name: "business", kind: "message", T: BusinessInfo },
    { no: 4, name: "event", kind: "message", T: Event },
  ],
);

/**
 * 播放页信息-请求
 *
 * @generated from message bilibili.pgc.gateway.player.v1.PlayViewReq
 */
export const PlayViewReq = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.PlayViewReq",
  () => [
    { no: 1, name: "epid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "cid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "qn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "fnver", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "fnval", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "download", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "force_host", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "fourk", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "spmid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "from_spmid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "teenagers_mode", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "prefer_codec_type", kind: "enum", T: proto3.getEnumType(CodeType) },
    { no: 13, name: "is_preview", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 投屏地址-响应
 *
 * @generated from message bilibili.pgc.gateway.player.v1.ProjectReply
 */
export const ProjectReply = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.ProjectReply",
  () => [
    { no: 1, name: "project", kind: "message", T: PlayURLReply },
  ],
);

/**
 * 投屏地址-请求
 *
 * @generated from message bilibili.pgc.gateway.player.v1.ProjectReq
 */
export const ProjectReq = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.ProjectReq",
  () => [
    { no: 1, name: "ep_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "cid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "qn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "fnver", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "fnval", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "download", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "forceHost", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "fourk", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "spmid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "fromSpmid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "protocol", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "device_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "use_new_project_code", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.pgc.gateway.player.v1.QualityDescription
 */
export const QualityDescription = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.QualityDescription",
  () => [
    { no: 1, name: "qn", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.pgc.gateway.player.v1.ResponseDataUrl
 */
export const ResponseDataUrl = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.ResponseDataUrl",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "stream_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "ptag", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * 房间信息
 *
 * @generated from message bilibili.pgc.gateway.player.v1.RoomInfo
 */
export const RoomInfo = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.RoomInfo",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "uid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "status", kind: "message", T: RoomStatusInfo },
    { no: 4, name: "show", kind: "message", T: RoomShowInfo },
  ],
);

/**
 * 房间信息-展示相关
 *
 * @generated from message bilibili.pgc.gateway.player.v1.RoomShowInfo
 */
export const RoomShowInfo = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.RoomShowInfo",
  () => [
    { no: 1, name: "short_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "popularity_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "live_start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 房间信息-状态相关
 *
 * @generated from message bilibili.pgc.gateway.player.v1.RoomStatusInfo
 */
export const RoomStatusInfo = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.RoomStatusInfo",
  () => [
    { no: 1, name: "live_status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "live_screen_type", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "live_mark", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "lock_status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "lock_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "hidden_status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "hidden_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "live_type", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "room_shield", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 震动
 *
 * @generated from message bilibili.pgc.gateway.player.v1.Shake
 */
export const Shake = proto3.makeMessageType(
  "bilibili.pgc.gateway.player.v1.Shake",
  () => [
    { no: 1, name: "file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

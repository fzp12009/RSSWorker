// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/app/dynamic/v1/dynamic.proto (package bilibili.app.dynamic.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DynDetailsReply, DynDetailsReq, DynMixUpListSearchReply, DynMixUpListSearchReq, DynMixUpListViewMoreReply, DynOurCityReply, DynOurCityReq, DynOurCitySwitchReq, DynRedReply, DynRedReq, DynTabReply, DynTabReq, DynUpdOffsetReq, DynVideoPersonalReply, DynVideoPersonalReq, DynVideoReq, DynVideoReqReply, GeoCoderReply, GeoCoderReq, NoReply, NoReq, OurCityClickReportReply, OurCityClickReportReq, SVideoReply, SVideoReq } from "./dynamic_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * v1动态
 *
 * @generated from service bilibili.app.dynamic.v1.Dynamic
 */
export const Dynamic = {
  typeName: "bilibili.app.dynamic.v1.Dynamic",
  methods: {
    /**
     * 动态视频页
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynVideo
     */
    dynVideo: {
      name: "DynVideo",
      I: DynVideoReq,
      O: DynVideoReqReply,
      kind: MethodKind.Unary,
    },
    /**
     * 批量动态id获取动态详情
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynDetails
     */
    dynDetails: {
      name: "DynDetails",
      I: DynDetailsReq,
      O: DynDetailsReply,
      kind: MethodKind.Unary,
    },
    /**
     * 小视频连播页
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.SVideo
     */
    sVideo: {
      name: "SVideo",
      I: SVideoReq,
      O: SVideoReply,
      kind: MethodKind.Unary,
    },
    /**
     * 动态tab页
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynTab
     */
    dynTab: {
      name: "DynTab",
      I: DynTabReq,
      O: DynTabReply,
      kind: MethodKind.Unary,
    },
    /**
     * 同城接口开关
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynOurCitySwitch
     */
    dynOurCitySwitch: {
      name: "DynOurCitySwitch",
      I: DynOurCitySwitchReq,
      O: NoReply,
      kind: MethodKind.Unary,
    },
    /**
     * 动态同城页
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynOurCity
     */
    dynOurCity: {
      name: "DynOurCity",
      I: DynOurCityReq,
      O: DynOurCityReply,
      kind: MethodKind.Unary,
    },
    /**
     * 最近访问-个人视频feed流
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynVideoPersonal
     */
    dynVideoPersonal: {
      name: "DynVideoPersonal",
      I: DynVideoPersonalReq,
      O: DynVideoPersonalReply,
      kind: MethodKind.Unary,
    },
    /**
     * 最近访问-标记已读
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynUpdOffset
     */
    dynUpdOffset: {
      name: "DynUpdOffset",
      I: DynUpdOffsetReq,
      O: NoReply,
      kind: MethodKind.Unary,
    },
    /**
     * 动态红点接口
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynRed
     */
    dynRed: {
      name: "DynRed",
      I: DynRedReq,
      O: DynRedReply,
      kind: MethodKind.Unary,
    },
    /**
     * 查看更多-列表
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynMixUpListViewMore
     */
    dynMixUpListViewMore: {
      name: "DynMixUpListViewMore",
      I: NoReq,
      O: DynMixUpListViewMoreReply,
      kind: MethodKind.Unary,
    },
    /**
     * 查看更多-搜索
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.DynMixUpListSearch
     */
    dynMixUpListSearch: {
      name: "DynMixUpListSearch",
      I: DynMixUpListSearchReq,
      O: DynMixUpListSearchReply,
      kind: MethodKind.Unary,
    },
    /**
     * 同城点击上报
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.OurCityClickReport
     */
    ourCityClickReport: {
      name: "OurCityClickReport",
      I: OurCityClickReportReq,
      O: OurCityClickReportReply,
      kind: MethodKind.Unary,
    },
    /**
     * 位置定位
     *
     * @generated from rpc bilibili.app.dynamic.v1.Dynamic.GeoCoder
     */
    geoCoder: {
      name: "GeoCoder",
      I: GeoCoderReq,
      O: GeoCoderReply,
      kind: MethodKind.Unary,
    },
  }
};

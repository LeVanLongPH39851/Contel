export const AudienceFullChannel = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A942%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "time_range": "2026-06-30T00:00:00 : 2026-06-30T23:59:59",
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "platform",
                        "op": "IN",
                        "val": [
                            "Big Screen"
                        ]
                    },
                    {
                        "col": "date",
                        "op": "TEMPORAL_RANGE",
                        "val": "No filter"
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [],
                "metrics": [
                    {
                        "aggregate": "MAX",
                        "column": {
                            "advanced_data_type": null,
                            "certification_details": null,
                            "certified_by": null,
                            "column_name": "is_min_leadin",
                            "description": null,
                            "expression": "CASE WHEN lead_in_effect = MIN(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                            "filterable": true,
                            "groupby": true,
                            "id": 3576,
                            "is_certified": false,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": null,
                            "type_generic": null,
                            "verbose_name": null,
                            "warning_markdown": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "Chương trình giữ chân thấp nhát",
                        "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Lead-in TB toàn kênh",
                        "optionName": "metric_ij7wky90iyb_yq3wfijvuds",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    },
                    {
                        "aggregate": "MIN",
                        "column": {
                            "advanced_data_type": null,
                            "certification_details": null,
                            "certified_by": null,
                            "column_name": "is_max_leadin",
                            "description": null,
                            "expression": "CASE WHEN lead_in_effect = MAX(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                            "filterable": true,
                            "groupby": true,
                            "id": 3577,
                            "is_certified": false,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": null,
                            "type_generic": null,
                            "verbose_name": null,
                            "warning_markdown": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "Chương trình giữ tốt nhất",
                        "optionName": "metric_1qbywybwqlt_zm89kcj70ns",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Số chương trình AT RISK",
                        "optionName": "metric_ozv1wjunr5_eqc51pi0r27",
                        "sqlExpression": "COUNT(CASE WHEN lead_in_effect < 0.35 THEN 1 END)"
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": "MAX",
                            "column": {
                                "advanced_data_type": null,
                                "certification_details": null,
                                "certified_by": null,
                                "column_name": "is_min_leadin",
                                "description": null,
                                "expression": "CASE WHEN lead_in_effect = MIN(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                                "filterable": true,
                                "groupby": true,
                                "id": 3576,
                                "is_certified": false,
                                "is_dttm": false,
                                "python_date_format": null,
                                "type": null,
                                "type_generic": null,
                                "verbose_name": null,
                                "warning_markdown": null
                            },
                            "datasourceWarning": false,
                            "expressionType": "SIMPLE",
                            "hasCustomLabel": true,
                            "label": "Chương trình giữ chân thấp nhát",
                            "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                            "sqlExpression": null
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 1,
                "series_limit": 0,
                "order_desc": false,
                "url_params": {
                    "native_filters_key": "-mQ7ZNm7nZHmipq7Y6klDU3QIqWi0Ssztt3PRdsIUBNtlAsKWBJWfc6JpfveNOe2"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "table",
            "slice_id": 942,
            "url_params": {
                "native_filters_key": "-mQ7ZNm7nZHmipq7Y6klDU3QIqWi0Ssztt3PRdsIUBNtlAsKWBJWfc6JpfveNOe2"
            },
            "query_mode": "aggregate",
            "groupby": [],
            "temporal_columns_lookup": {
                "date": true
            },
            "metrics": [
                {
                    "aggregate": "MAX",
                    "column": {
                        "advanced_data_type": null,
                        "certification_details": null,
                        "certified_by": null,
                        "column_name": "is_min_leadin",
                        "description": null,
                        "expression": "CASE WHEN lead_in_effect = MIN(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                        "filterable": true,
                        "groupby": true,
                        "id": 3576,
                        "is_certified": false,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": null,
                        "type_generic": null,
                        "verbose_name": null,
                        "warning_markdown": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "Chương trình giữ chân thấp nhát",
                    "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Lead-in TB toàn kênh",
                    "optionName": "metric_ij7wky90iyb_yq3wfijvuds",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                },
                {
                    "aggregate": "MIN",
                    "column": {
                        "advanced_data_type": null,
                        "certification_details": null,
                        "certified_by": null,
                        "column_name": "is_max_leadin",
                        "description": null,
                        "expression": "CASE WHEN lead_in_effect = MAX(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                        "filterable": true,
                        "groupby": true,
                        "id": 3577,
                        "is_certified": false,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": null,
                        "type_generic": null,
                        "verbose_name": null,
                        "warning_markdown": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "Chương trình giữ tốt nhất",
                    "optionName": "metric_1qbywybwqlt_zm89kcj70ns",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Số chương trình AT RISK",
                    "optionName": "metric_ozv1wjunr5_eqc51pi0r27",
                    "sqlExpression": "COUNT(CASE WHEN lead_in_effect < 0.35 THEN 1 END)"
                }
            ],
            "all_columns": [
                "program_name"
            ],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": [
                        "Big Screen"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_zyuskzmfv99_9bohhzaq6ij",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "IN",
                    "operatorId": "IN",
                    "sqlExpression": null,
                    "subject": "platform"
                },
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_nddeo2qa0q_9sldo8fgq74",
                    "isExtra": true,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "date"
                }
            ],
            "order_by_cols": [],
            "server_pagination": false,
            "row_limit": "1",
            "server_page_length": 10,
            "order_desc": false,
            "table_timestamp_format": "smart_date",
            "page_length": null,
            "allow_rearrange_columns": false,
            "allow_render_html": true,
            "show_cell_bars": true,
            "color_pn": true,
            "comparison_color_scheme": "Green",
            "conditional_formatting": [],
            "comparison_type": "values",
            "dashboards": [
                68
            ],
            "extra_form_data": {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    }
                ],
                "time_range": "2026-06-30T00:00:00 : 2026-06-30T23:59:59"
            },
            "chart_id": 942,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "REVIEW": "#454E7C",
                "MAINTAIN": "#5AC189",
                "STRENGTHEN": "#1FA8C9",
                "AT RISK": "#1FA8C9"
            },
            "extra_filters": [],
            "force": false,
            "result_format": "json",
            "result_type": "full"
        },
        "result_format": "json",
        "result_type": "full"
    }
};
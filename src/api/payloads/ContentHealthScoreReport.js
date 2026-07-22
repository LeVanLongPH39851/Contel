export const ContentHealthScoreReport = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A1021%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 306,
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
                "columns": [
                    "date",
                    "event_start_timestamp",
                    "channel_name_tvd",
                    "program_name",
                    "typo_first",
                    "frequency",
                    "duration"
                ],
                "metrics": [
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Content Health Score",
                        "optionName": "metric_tbl07s728rf_y7gi9237ov",
                        "sqlExpression": "AVG(content_health_score) * 100"
                    },
                    {
                        "aggregate": "AVG",
                        "column": {
                            "advanced_data_type": null,
                            "changed_on": "2026-07-14T03:07:35.857807",
                            "column_name": "watch_time_efficiency",
                            "created_on": "2026-07-14T03:07:35.857806",
                            "description": null,
                            "expression": null,
                            "extra": "{}",
                            "filterable": true,
                            "groupby": true,
                            "id": 3921,
                            "is_active": true,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": "DOUBLE",
                            "type_generic": 0,
                            "uuid": "5ef7c7d3-3f6d-457c-96d1-d8621605481b",
                            "verbose_name": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "WTE",
                        "optionName": "metric_d0dy8c9gwzn_0k7kpk5vnl5c",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "RTR",
                        "optionName": "metric_wb9ck8mimgs_6aegqnb6hg6",
                        "sqlExpression": "AVG(return_viewer_rate_7days)*100"
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Lead-in",
                        "optionName": "metric_j4w2zqn5fr_8c4yrkvgfzj",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    },
                    {
                        "aggregate": "AVG",
                        "column": {
                            "advanced_data_type": null,
                            "changed_on": "2026-07-14T03:07:35.857489",
                            "column_name": "avg_dropoff_by_duration",
                            "created_on": "2026-07-14T03:07:35.857488",
                            "description": null,
                            "expression": null,
                            "extra": "{}",
                            "filterable": true,
                            "groupby": true,
                            "id": 3904,
                            "is_active": true,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": "DOUBLE",
                            "type_generic": 0,
                            "uuid": "19db0d9a-ccb8-48b2-ac76-ad553ccf6dda",
                            "verbose_name": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "Drop-off theo phút",
                        "optionName": "metric_dshzkjizfxv_p6pz6390r7",
                        "sqlExpression": null
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": null,
                            "column": null,
                            "datasourceWarning": false,
                            "expressionType": "SQL",
                            "hasCustomLabel": true,
                            "label": "Content Health Score",
                            "optionName": "metric_tbl07s728rf_y7gi9237ov",
                            "sqlExpression": "AVG(content_health_score) * 100"
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 50000,
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "g_sS4TJ32VBaHdY12zpKn4bAKzLx7HF1qMpNm9IL9yiVxoslkW7td1AaHaSBHbih"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "306__table",
            "viz_type": "table",
            "slice_id": 1021,
            "url_params": {
                "native_filters_key": "g_sS4TJ32VBaHdY12zpKn4bAKzLx7HF1qMpNm9IL9yiVxoslkW7td1AaHaSBHbih"
            },
            "query_mode": "aggregate",
            "groupby": [
                "date",
                "event_start_timestamp",
                "channel_name_tvd",
                "program_name",
                "typo_first",
                "frequency",
                "duration"
            ],
            "temporal_columns_lookup": {
                "date": true
            },
            "metrics": [
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Content Health Score",
                    "optionName": "metric_tbl07s728rf_y7gi9237ov",
                    "sqlExpression": "AVG(content_health_score) * 100"
                },
                {
                    "aggregate": "AVG",
                    "column": {
                        "advanced_data_type": null,
                        "changed_on": "2026-07-14T03:07:35.857807",
                        "column_name": "watch_time_efficiency",
                        "created_on": "2026-07-14T03:07:35.857806",
                        "description": null,
                        "expression": null,
                        "extra": "{}",
                        "filterable": true,
                        "groupby": true,
                        "id": 3921,
                        "is_active": true,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": "DOUBLE",
                        "type_generic": 0,
                        "uuid": "5ef7c7d3-3f6d-457c-96d1-d8621605481b",
                        "verbose_name": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "WTE",
                    "optionName": "metric_d0dy8c9gwzn_0k7kpk5vnl5c",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "RTR",
                    "optionName": "metric_wb9ck8mimgs_6aegqnb6hg6",
                    "sqlExpression": "AVG(return_viewer_rate_7days)*100"
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Lead-in",
                    "optionName": "metric_j4w2zqn5fr_8c4yrkvgfzj",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                },
                {
                    "aggregate": "AVG",
                    "column": {
                        "advanced_data_type": null,
                        "changed_on": "2026-07-14T03:07:35.857489",
                        "column_name": "avg_dropoff_by_duration",
                        "created_on": "2026-07-14T03:07:35.857488",
                        "description": null,
                        "expression": null,
                        "extra": "{}",
                        "filterable": true,
                        "groupby": true,
                        "id": 3904,
                        "is_active": true,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": "DOUBLE",
                        "type_generic": 0,
                        "uuid": "19db0d9a-ccb8-48b2-ac76-ad553ccf6dda",
                        "verbose_name": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "Drop-off theo phút",
                    "optionName": "metric_dshzkjizfxv_p6pz6390r7",
                    "sqlExpression": null
                }
            ],
            "all_columns": [],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "date"
                }
            ],
            "order_by_cols": [],
            "row_limit": 50000,
            "server_page_length": 10,
            "order_desc": true,
            "table_timestamp_format": "smart_date",
            "include_search": true,
            "allow_render_html": true,
            "column_config": {
                "Drop-off theo phút": {
                    "d3NumberFormat": ".2%"
                },
                "date": {
                    "d3TimeFormat": "%Y-%m-%d"
                },
                "event_start_timestamp": {
                    "d3TimeFormat": "%H:%M:%S"
                }
            },
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
                    },
                    {
                        "col": "program_name",
                        "op": "IN",
                        "val": [
                            "THỜI SỰ 19H"
                        ]
                    }
                ],
                "time_range": "2026-06-30T00:00:00 : 2026-06-30T23:59:59"
            },
            "chart_id": 1021,
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
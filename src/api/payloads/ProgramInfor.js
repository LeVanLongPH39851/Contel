export const ProgramInfor = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A931%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 304,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)",
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
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": false,
                        "label": "AVG(content_health_score)*100",
                        "optionName": "metric_dd17p09qjdn_cqnyo60f9u",
                        "sqlExpression": "AVG(content_health_score)*100"
                    },
                    {
                        "aggregate": "AVG",
                        "column": {
                            "advanced_data_type": null,
                            "certification_details": null,
                            "certified_by": null,
                            "column_name": "watch_time_efficiency",
                            "description": null,
                            "expression": null,
                            "filterable": true,
                            "groupby": true,
                            "id": 3561,
                            "is_certified": false,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": "DOUBLE",
                            "type_generic": 0,
                            "verbose_name": null,
                            "warning_markdown": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": false,
                        "label": "AVG(watch_time_efficiency)",
                        "optionName": "metric_3rognvr7416_niw20yc9dms",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": false,
                        "label": "AVG(return_viewer_rate_14days)*100",
                        "optionName": "metric_hbt4jiidqu9_ti8i62ogxta",
                        "sqlExpression": "AVG(return_viewer_rate_14days)*100"
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": false,
                        "label": "AVG(lead_in_effect)*100",
                        "optionName": "metric_lf2jgvqnx9o_lshnwntrshk",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": null,
                            "column": null,
                            "datasourceWarning": false,
                            "expressionType": "SQL",
                            "hasCustomLabel": false,
                            "label": "AVG(content_health_score)*100",
                            "optionName": "metric_dd17p09qjdn_cqnyo60f9u",
                            "sqlExpression": "AVG(content_health_score)*100"
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 10000,
                "series_limit": 0,
                "order_desc": true,
                "url_params": {},
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "304__table",
            "viz_type": "table",
            "slice_id": 931,
            "url_params": {},
            "query_mode": "aggregate",
            "groupby": [],
            "temporal_columns_lookup": {},
            "metrics": [
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": false,
                    "label": "AVG(content_health_score)*100",
                    "optionName": "metric_dd17p09qjdn_cqnyo60f9u",
                    "sqlExpression": "AVG(content_health_score)*100"
                },
                {
                    "aggregate": "AVG",
                    "column": {
                        "advanced_data_type": null,
                        "certification_details": null,
                        "certified_by": null,
                        "column_name": "watch_time_efficiency",
                        "description": null,
                        "expression": null,
                        "filterable": true,
                        "groupby": true,
                        "id": 3561,
                        "is_certified": false,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": "DOUBLE",
                        "type_generic": 0,
                        "verbose_name": null,
                        "warning_markdown": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": false,
                    "label": "AVG(watch_time_efficiency)",
                    "optionName": "metric_3rognvr7416_niw20yc9dms",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": false,
                    "label": "AVG(return_viewer_rate_14days)*100",
                    "optionName": "metric_hbt4jiidqu9_ti8i62ogxta",
                    "sqlExpression": "AVG(return_viewer_rate_14days)*100"
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": false,
                    "label": "AVG(lead_in_effect)*100",
                    "optionName": "metric_lf2jgvqnx9o_lshnwntrshk",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                }
            ],
            "all_columns": [],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": [
                        "Big Screen"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_5hc80w4mfip_injldruia7s",
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
                    "filterOptionName": "filter_msjl65ugo78_8ef3ft4p2tv",
                    "isExtra": true,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "date"
                }
            ],
            "order_by_cols": [],
            "row_limit": 10000,
            "server_page_length": 10,
            "order_desc": true,
            "table_timestamp_format": "smart_date",
            "allow_render_html": true,
            "show_cell_bars": true,
            "color_pn": true,
            "comparison_color_scheme": "Green",
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
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)"
            },
            "chart_id": 931,
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
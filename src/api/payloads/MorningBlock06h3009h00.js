export const MorningBlock06h3009h00 = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A941%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
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
                        "col": "start_time",
                        "op": "<=",
                        "val": "09:00:00"
                    },
                    {
                        "col": "start_time",
                        "op": ">=",
                        "val": "06:30:00"
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
                "columns": [
                    "program_order",
                    "start_hour",
                    {
                        "expressionType": "SQL",
                        "label": "Chương trình",
                        "sqlExpression": "prev_program"
                    },
                    {
                        "expressionType": "SQL",
                        "label": "Chương trình tiếp theo",
                        "sqlExpression": "program_name"
                    }
                ],
                "metrics": [
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "% audience tiếp tục xem",
                        "optionName": "metric_k5nyskjhme_s0l4ztofun",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "% audience thoát ra",
                        "optionName": "metric_myljmqb9pra_sn7o46dmkao",
                        "sqlExpression": "100-AVG(lead_in_effect)*100"
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
                            "label": "program_order",
                            "optionName": "metric_fhc0iytjabc_y52npre23ug",
                            "sqlExpression": "program_order"
                        },
                        true
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 1000,
                "series_limit": 0,
                "series_limit_metric": {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": false,
                    "label": "program_order",
                    "optionName": "metric_fhc0iytjabc_y52npre23ug",
                    "sqlExpression": "program_order"
                },
                "order_desc": false,
                "url_params": {},
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "table",
            "slice_id": 941,
            "url_params": {},
            "query_mode": "aggregate",
            "groupby": [
                "program_order",
                "start_hour",
                {
                    "expressionType": "SQL",
                    "label": "Chương trình",
                    "sqlExpression": "prev_program"
                },
                {
                    "expressionType": "SQL",
                    "label": "Chương trình tiếp theo",
                    "sqlExpression": "program_name"
                }
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
                    "label": "% audience tiếp tục xem",
                    "optionName": "metric_k5nyskjhme_s0l4ztofun",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "% audience thoát ra",
                    "optionName": "metric_myljmqb9pra_sn7o46dmkao",
                    "sqlExpression": "100-AVG(lead_in_effect)*100"
                }
            ],
            "all_columns": [],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "09:00:00",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_popmfmagx5_k3g01b9m5e",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "<=",
                    "operatorId": "LESS_THAN_OR_EQUAL",
                    "sqlExpression": null,
                    "subject": "start_time"
                },
                {
                    "clause": "WHERE",
                    "comparator": "06:30:00",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_8bpnyx42mhs_ditpqwfq3q",
                    "isExtra": false,
                    "isNew": false,
                    "operator": ">=",
                    "operatorId": "GREATER_THAN_OR_EQUAL",
                    "sqlExpression": null,
                    "subject": "start_time"
                },
                {
                    "clause": "WHERE",
                    "comparator": [
                        "Big Screen"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_9jwuz3gs6ij_jbq6izsdl5l",
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
                    "filterOptionName": "filter_hl8jiwfx8v_tcvpdr5ivvm",
                    "isExtra": true,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "date"
                }
            ],
            "timeseries_limit_metric": {
                "aggregate": null,
                "column": null,
                "datasourceWarning": false,
                "expressionType": "SQL",
                "hasCustomLabel": false,
                "label": "program_order",
                "optionName": "metric_fhc0iytjabc_y52npre23ug",
                "sqlExpression": "program_order"
            },
            "order_by_cols": [],
            "row_limit": 1000,
            "server_page_length": 10,
            "order_desc": false,
            "table_timestamp_format": "smart_date",
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
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)"
            },
            "chart_id": 941,
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
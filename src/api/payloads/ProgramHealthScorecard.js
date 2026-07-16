export const ProgramHealthScorecard = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A1019%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 303,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "filter_w",
                        "op": "NOT IN",
                        "val": [
                            "1 weeks"
                        ]
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    "program_name",
                    "status",
                    "Content Health Score",
                    "Watch Time Efficiency",
                    "Return Viewer Rate",
                    "Lead-in Effect",
                    "last_4_week"
                ],
                "metrics": [],
                "orderby": [
                    [
                        {
                            "aggregate": null,
                            "column": null,
                            "datasourceWarning": false,
                            "expressionType": "SQL",
                            "hasCustomLabel": false,
                            "label": "`Content Health Score`",
                            "optionName": "metric_flualv49vhv_rpwydo3l1b",
                            "sqlExpression": "`Content Health Score`"
                        },
                        false
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
                    "label": "`Content Health Score`",
                    "optionName": "metric_flualv49vhv_rpwydo3l1b",
                    "sqlExpression": "`Content Health Score`"
                },
                "order_desc": true,
                "url_params": {},
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "303__table",
            "viz_type": "table",
            "slice_id": 1019,
            "url_params": {},
            "query_mode": "aggregate",
            "groupby": [
                "program_name",
                "status",
                "Content Health Score",
                "Watch Time Efficiency",
                "Return Viewer Rate",
                "Lead-in Effect",
                "last_4_week"
            ],
            "temporal_columns_lookup": {
                "start_of_week": true
            },
            "all_columns": [],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": [
                        "1 weeks"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_cb0n582xonc_s2ltgwnjbm",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "NOT IN",
                    "operatorId": "NOT_IN",
                    "sqlExpression": null,
                    "subject": "filter_w"
                },
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "start_of_week"
                }
            ],
            "timeseries_limit_metric": {
                "aggregate": null,
                "column": null,
                "datasourceWarning": false,
                "expressionType": "SQL",
                "hasCustomLabel": false,
                "label": "`Content Health Score`",
                "optionName": "metric_flualv49vhv_rpwydo3l1b",
                "sqlExpression": "`Content Health Score`"
            },
            "order_by_cols": [],
            "row_limit": 1000,
            "server_page_length": 10,
            "order_desc": true,
            "table_timestamp_format": "smart_date",
            "include_search": true,
            "allow_render_html": true,
            "column_config": {
                "Content Health Score": {
                    "d3NumberFormat": ",d"
                },
                "Lead-in Effect": {
                    "d3NumberFormat": ",d"
                },
                "Return Viewer Rate": {
                    "d3NumberFormat": ",d"
                },
                "Watch Time Efficiency": {
                    "d3NumberFormat": ",d"
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
                    }
                ]
            },
            "chart_id": 1019,
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
export const AvgReturnViewerRate = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A939%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 286,
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
                    }
                ],
                "extras": {
                    "time_grain_sqla": "P1W",
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    {
                        "timeGrain": "P1W",
                        "columnType": "BASE_AXIS",
                        "sqlExpression": "start_of_week",
                        "label": "start_of_week",
                        "expressionType": "SQL"
                    }
                ],
                "metrics": [
                    {
                        "aggregate": "AVG",
                        "column": {
                            "advanced_data_type": null,
                            "certification_details": null,
                            "certified_by": null,
                            "column_name": "Return Viewer Rate",
                            "description": null,
                            "expression": null,
                            "filterable": true,
                            "groupby": true,
                            "id": 3603,
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
                        "label": "AVG(Return Viewer Rate)",
                        "optionName": "metric_5ndpwdfhwoe_y1ccky6juzr",
                        "sqlExpression": null
                    }
                ],
                "annotation_layers": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {},
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [
                    {
                        "operation": "pivot",
                        "options": {
                            "index": [
                                "start_of_week"
                            ],
                            "columns": [],
                            "aggregates": {
                                "AVG(Return Viewer Rate)": {
                                    "operator": "mean"
                                }
                            },
                            "drop_missing_columns": true
                        }
                    },
                    {
                        "operation": "flatten"
                    }
                ]
            }
        ],
        "form_data": {
            "datasource": "286__table",
            "viz_type": "big_number",
            "slice_id": 939,
            "url_params": {},
            "x_axis": "start_of_week",
            "time_grain_sqla": "P1W",
            "metric": {
                "aggregate": "AVG",
                "column": {
                    "advanced_data_type": null,
                    "certification_details": null,
                    "certified_by": null,
                    "column_name": "Return Viewer Rate",
                    "description": null,
                    "expression": null,
                    "filterable": true,
                    "groupby": true,
                    "id": 3603,
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
                "label": "AVG(Return Viewer Rate)",
                "optionName": "metric_5ndpwdfhwoe_y1ccky6juzr",
                "sqlExpression": null
            },
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "start_of_week"
                }
            ],
            "compare_lag": 1,
            "show_trend_line": true,
            "start_y_axis_at_zero": true,
            "color_picker": {
                "a": 1,
                "b": 135,
                "g": 122,
                "r": 0
            },
            "header_font_size": 0.4,
            "subheader_font_size": 0.15,
            "y_axis_format": "SMART_NUMBER",
            "time_format": "smart_date",
            "rolling_type": "None",
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
            "chart_id": 939,
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
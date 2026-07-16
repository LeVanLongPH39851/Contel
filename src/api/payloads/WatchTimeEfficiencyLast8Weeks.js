export const WatchTimeEfficiencyLast8Weeks = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A943%7D&dashboard_id=68`,
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
                    },
                    {
                        "col": "program_name",
                        "op": "IN",
                        "val": [
                            "THỜI SỰ 19H"
                        ]
                    },
                    {
                        "col": "filter_w",
                        "op": "IN",
                        "val": [
                            "8 weeks"
                        ]
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    {
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
                            "changed_on": "2026-06-26T03:42:15.030439",
                            "column_name": "Watch Time Efficiency",
                            "created_on": "2026-06-26T03:42:15.030438",
                            "description": null,
                            "expression": null,
                            "extra": "{\"warning_markdown\":null}",
                            "filterable": true,
                            "groupby": true,
                            "id": 3599,
                            "is_active": true,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": "DOUBLE",
                            "type_generic": 0,
                            "uuid": "06e8bbf1-7684-4c74-aed7-e5c6ffdf8663",
                            "verbose_name": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": false,
                        "label": "AVG(Watch Time Efficiency)",
                        "optionName": "metric_6vxqc65guvb_5x3mabiv7en",
                        "sqlExpression": null
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": "AVG",
                            "column": {
                                "advanced_data_type": null,
                                "changed_on": "2026-06-26T03:42:15.030439",
                                "column_name": "Watch Time Efficiency",
                                "created_on": "2026-06-26T03:42:15.030438",
                                "description": null,
                                "expression": null,
                                "extra": "{\"warning_markdown\":null}",
                                "filterable": true,
                                "groupby": true,
                                "id": 3599,
                                "is_active": true,
                                "is_dttm": false,
                                "python_date_format": null,
                                "type": "DOUBLE",
                                "type_generic": 0,
                                "uuid": "06e8bbf1-7684-4c74-aed7-e5c6ffdf8663",
                                "verbose_name": null
                            },
                            "datasourceWarning": false,
                            "expressionType": "SIMPLE",
                            "hasCustomLabel": false,
                            "label": "AVG(Watch Time Efficiency)",
                            "optionName": "metric_6vxqc65guvb_5x3mabiv7en",
                            "sqlExpression": null
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 10000,
                "series_columns": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {},
                "custom_params": {},
                "custom_form_data": {},
                "time_offsets": [],
                "post_processing": [
                    {
                        "operation": "pivot",
                        "options": {
                            "index": [
                                "start_of_week"
                            ],
                            "columns": [],
                            "aggregates": {
                                "AVG(Watch Time Efficiency)": {
                                    "operator": "mean"
                                }
                            },
                            "drop_missing_columns": false
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
            "viz_type": "echarts_timeseries_bar",
            "slice_id": 943,
            "url_params": {},
            "x_axis": "start_of_week",
            "x_axis_sort_asc": true,
            "x_axis_sort_series": "name",
            "x_axis_sort_series_ascending": true,
            "metrics": [
                {
                    "aggregate": "AVG",
                    "column": {
                        "advanced_data_type": null,
                        "changed_on": "2026-06-26T03:42:15.030439",
                        "column_name": "Watch Time Efficiency",
                        "created_on": "2026-06-26T03:42:15.030438",
                        "description": null,
                        "expression": null,
                        "extra": "{\"warning_markdown\":null}",
                        "filterable": true,
                        "groupby": true,
                        "id": 3599,
                        "is_active": true,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": "DOUBLE",
                        "type_generic": 0,
                        "uuid": "06e8bbf1-7684-4c74-aed7-e5c6ffdf8663",
                        "verbose_name": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": false,
                    "label": "AVG(Watch Time Efficiency)",
                    "optionName": "metric_6vxqc65guvb_5x3mabiv7en",
                    "sqlExpression": null
                }
            ],
            "groupby": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_rhqyrknd1oc_3buisb3bxzo",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "start_of_week"
                },
                {
                    "clause": "WHERE",
                    "comparator": [
                        "8 weeks"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_4j4sw4s3l8o_8gt9bbkqx19",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "IN",
                    "operatorId": "IN",
                    "sqlExpression": null,
                    "subject": "filter_w"
                }
            ],
            "order_desc": true,
            "row_limit": 10000,
            "truncate_metric": true,
            "show_empty_columns": true,
            "comparison_type": "values",
            "annotation_layers": [],
            "forecastPeriods": 10,
            "forecastInterval": 0.8,
            "orientation": "vertical",
            "x_axis_title_margin": 15,
            "y_axis_title_margin": 15,
            "y_axis_title_position": "Left",
            "sort_series_type": "sum",
            "color_scheme": "supersetColors",
            "time_shift_color": true,
            "only_total": true,
            "show_legend": true,
            "legendType": "scroll",
            "legendOrientation": "top",
            "x_axis_time_format": "%d/%m/%Y",
            "y_axis_format": "SMART_NUMBER",
            "y_axis_bounds": [
                null,
                null
            ],
            "truncateXAxis": true,
            "rich_tooltip": true,
            "showTooltipTotal": true,
            "showTooltipPercentage": true,
            "tooltipTimeFormat": "smart_date",
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
                ]
            },
            "chart_id": 943,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "REVIEW": "#454E7C",
                "MAINTAIN": "#5AC189",
                "STRENGTHEN": "#1FA8C9",
                "AT RISK": "#1FA8C9"
            },
            "own_color_scheme": "supersetColors",
            "extra_filters": [],
            "force": false,
            "result_format": "json",
            "result_type": "full"
        },
        "result_format": "json",
        "result_type": "full"
    }
};
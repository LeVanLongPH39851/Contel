export const DropOffCurve = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A927%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 289,
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
                    {
                        "columnType": "BASE_AXIS",
                        "sqlExpression": "minute_index",
                        "label": "minute_index",
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
                            "column_name": "dropoff_rate_by_view",
                            "description": null,
                            "expression": null,
                            "filterable": true,
                            "groupby": true,
                            "id": 3592,
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
                        "label": "AVG(dropoff_rate_by_view)",
                        "optionName": "metric_ed8ws68xdfh_x3x18ombhgr",
                        "sqlExpression": null
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": "AVG",
                            "column": {
                                "advanced_data_type": null,
                                "certification_details": null,
                                "certified_by": null,
                                "column_name": "dropoff_rate_by_view",
                                "description": null,
                                "expression": null,
                                "filterable": true,
                                "groupby": true,
                                "id": 3592,
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
                            "label": "AVG(dropoff_rate_by_view)",
                            "optionName": "metric_ed8ws68xdfh_x3x18ombhgr",
                            "sqlExpression": null
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 5000,
                "series_columns": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
                },
                "custom_params": {},
                "custom_form_data": {},
                "time_offsets": [],
                "post_processing": [
                    {
                        "operation": "pivot",
                        "options": {
                            "index": [
                                "minute_index"
                            ],
                            "columns": [],
                            "aggregates": {
                                "AVG(dropoff_rate_by_view)": {
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
            "datasource": "289__table",
            "viz_type": "echarts_area",
            "slice_id": 927,
            "url_params": {
                "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
            },
            "x_axis": "minute_index",
            "xAxisForceCategorical": false,
            "x_axis_sort_asc": true,
            "x_axis_sort_series": "name",
            "x_axis_sort_series_ascending": true,
            "metrics": [
                {
                    "aggregate": "AVG",
                    "column": {
                        "advanced_data_type": null,
                        "certification_details": null,
                        "certified_by": null,
                        "column_name": "dropoff_rate_by_view",
                        "description": null,
                        "expression": null,
                        "filterable": true,
                        "groupby": true,
                        "id": 3592,
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
                    "label": "AVG(dropoff_rate_by_view)",
                    "optionName": "metric_ed8ws68xdfh_x3x18ombhgr",
                    "sqlExpression": null
                }
            ],
            "groupby": [],
            "contributionMode": null,
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "date"
                }
            ],
            "order_desc": true,
            "row_limit": 5000,
            "truncate_metric": true,
            "show_empty_columns": true,
            "comparison_type": "values",
            "annotation_layers": [],
            "forecastPeriods": 10,
            "forecastInterval": 0.8,
            "x_axis_title_margin": 15,
            "y_axis_title_margin": 15,
            "y_axis_title_position": "Left",
            "sort_series_type": "sum",
            "sort_series_ascending": false,
            "color_scheme": "supersetColors",
            "time_shift_color": true,
            "seriesType": "line",
            "opacity": 0.2,
            "show_value": false,
            "stack": null,
            "only_total": true,
            "show_extra_controls": false,
            "markerEnabled": false,
            "markerSize": 6,
            "minorTicks": false,
            "zoomable": false,
            "show_legend": false,
            "legendType": "scroll",
            "legendOrientation": "top",
            "x_axis_time_format": "smart_date",
            "rich_tooltip": true,
            "showTooltipTotal": true,
            "showTooltipPercentage": true,
            "tooltipTimeFormat": "smart_date",
            "y_axis_format": "SMART_NUMBER",
            "truncateXAxis": true,
            "truncateYAxis": false,
            "y_axis_bounds": [
                null,
                null
            ],
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
            "chart_id": 927,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "AVG(Watch Time Efficiency)": "#1FA8C9",
                "AVG(dropoff_rate_by_view)": "#1FA8C9",
                "AT RISK": "#1FA8C9",
                "REVIEW": "#454E7C",
                "MAINTAIN": "#5AC189"
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
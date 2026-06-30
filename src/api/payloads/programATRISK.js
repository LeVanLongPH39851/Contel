export const programATRISK = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A937%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
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
                        "col": "status",
                        "op": "IN",
                        "val": [
                            "AT RISK"
                        ]
                    },
                    {
                        "col": "date",
                        "op": "TEMPORAL_RANGE",
                        "val": "No filter"
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
                        "sqlExpression": "date",
                        "label": "date",
                        "expressionType": "SQL"
                    }
                ],
                "metrics": [
                    {
                        "aggregate": "COUNT",
                        "column": {
                            "advanced_data_type": null,
                            "certification_details": null,
                            "certified_by": null,
                            "column_name": "status",
                            "description": null,
                            "expression": "CASE \r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 >= 75 \r\n        THEN 'STRENGTHEN'\r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 BETWEEN 55 AND 74.9999\r\n        THEN 'MAINTAIN'\r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 BETWEEN 35 AND 54.9999\r\n        THEN 'REVIEW'\r\n    ELSE 'AT RISK'\r\nEND",
                            "filterable": true,
                            "groupby": true,
                            "id": 7137,
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
                        "hasCustomLabel": false,
                        "label": "COUNT(status)",
                        "optionName": "metric_t28n0vkhlob_bc1l5mw7g7a",
                        "sqlExpression": null
                    }
                ],
                "annotation_layers": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [
                    {
                        "operation": "pivot",
                        "options": {
                            "index": [
                                "date"
                            ],
                            "columns": [],
                            "aggregates": {
                                "COUNT(status)": {
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
            "datasource": "288__table",
            "viz_type": "big_number",
            "slice_id": 937,
            "url_params": {
                "native_filters_key": "gopTW064xfeVfPgqeEATzRimInw0vWV1HzEwNwRsvPZuh7bMBOaoEsOS6JPn_xN1"
            },
            "x_axis": "date",
            "time_grain_sqla": "P1W",
            "metric": {
                "aggregate": "COUNT",
                "column": {
                    "advanced_data_type": null,
                    "certification_details": null,
                    "certified_by": null,
                    "column_name": "status",
                    "description": null,
                    "expression": "CASE \r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 >= 75 \r\n        THEN 'STRENGTHEN'\r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 BETWEEN 55 AND 74.9999\r\n        THEN 'MAINTAIN'\r\n    WHEN (0.4 * watch_time_efficiency + 0.35 * (1 - new_viewer_rate) + 0.25 * lead_in_effect) * 100 BETWEEN 35 AND 54.9999\r\n        THEN 'REVIEW'\r\n    ELSE 'AT RISK'\r\nEND",
                    "filterable": true,
                    "groupby": true,
                    "id": 7137,
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
                "hasCustomLabel": false,
                "label": "COUNT(status)",
                "optionName": "metric_t28n0vkhlob_bc1l5mw7g7a",
                "sqlExpression": null
            },
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": [
                        "AT RISK"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_8mvpkqnc0ew_819n9izmi6s",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "IN",
                    "operatorId": "IN",
                    "sqlExpression": null,
                    "subject": "status"
                },
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "date"
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
            "chart_id": 937,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "AVG(dropoff_rate_by_view)": "#1FA8C9",
                "AVG(Watch Time Efficiency)": "#1FA8C9"
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
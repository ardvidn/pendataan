import { Column, Entity, Index } from "typeorm";

@Index("l2_2_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "statusLogZnt"], { unique: true })
@Index("l2_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPerekamLogZnt"], { unique: true })
@Index("log_znt_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Entity("log_znt", { schema: "public" })
export class LogZnt {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("smallint", { name: "status_log_znt", default: () => "0" })
  statusLogZnt!: number;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_log_znt",
    default: () => "statement_timestamp()",
  })
  tglRekamLogZnt!: Date;

  @Column("character", { name: "nip_perekam_log_znt", length: 18 })
  nipPerekamLogZnt!: string;
}

import { Column, Entity, Index } from "typeorm";

@Index("log_dbkb_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Index("l1_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPerekamLogDbkb"], { unique: true })
@Index("l1_2_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "statusLogDbkb"], { unique: true })
@Entity("log_dbkb", { schema: "public" })
export class LogDbkb {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("smallint", { name: "status_log_dbkb", default: () => "0" })
  statusLogDbkb!: number;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_log_dbkb",
    default: () => "statement_timestamp()",
  })
  tglRekamLogDbkb!: Date;

  @Column("character", { name: "nip_perekam_log_dbkb", length: 18 })
  nipPerekamLogDbkb!: string;
}

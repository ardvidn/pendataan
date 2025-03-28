import { Column, Entity } from "typeorm";

@Entity("z_input_sppt_tersampaikan", { schema: "public" })
export class ZInputSpptTersampaikan {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("character varying", {
    name: "nama_penerima",
    nullable: true,
    length: 255,
  })
  namaPenerima!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_diterima_sppt",
    nullable: true,
  })
  tglDiterimaSppt!: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt!: Date | null;

  @Column("bigint", { name: "userid", nullable: true })
  userid!: string | null;

  @Column("character", { name: "kd_dukuh", nullable: true, length: 3 })
  kdDukuh!: string | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt!: Date | null;
}

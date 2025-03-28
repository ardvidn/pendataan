import { Column, Entity } from "typeorm";

@Entity("batal_bayar", { schema: "public" })
export class BatalBayar {
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

  @Column("bigint", { name: "denda_sppt", nullable: true })
  dendaSppt!: string | null;

  @Column("bigint", { name: "jml_sppt_yg_dibayar", nullable: true })
  jmlSpptYgDibayar!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pembayaran_sppt",
    nullable: true,
  })
  tglPembayaranSppt!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_pembatalan",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglPembatalan!: Date | null;

  @Column("character varying", {
    name: "keterangan_batal",
    nullable: true,
    length: 50,
  })
  keteranganBatal!: string | null;

  @Column("character", { name: "nip_pembatalan", nullable: true, length: 18 })
  nipPembatalan!: string | null;
}

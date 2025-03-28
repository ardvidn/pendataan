import { Column, Entity, Index } from "typeorm";

@Index("temp_spop_lspop_pkey", ["jnsTransaksiTemp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipTransaksiTemp", "noTransaksiTemp", "noUrut"], { unique: true })
@Index("t4_2_ak", ["jnsTransaksiTemp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipTransaksiTemp", "noTransaksiTemp", "noUrut", "statusProses"], { unique: true })
@Entity("temp_spop_lspop", { schema: "public" })
export class TempSpopLspop {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "jns_transaksi_temp", length: 1 })
  jnsTransaksiTemp!: string;

  @Column("smallint", { primary: true, name: "no_transaksi_temp" })
  noTransaksiTemp!: number;

  @Column("character", {
    primary: true,
    name: "nip_transaksi_temp",
    length: 18,
  })
  nipTransaksiTemp!: string;

  @Column("smallint", { name: "status_proses", nullable: true })
  statusProses!: number | null;
}
